import { lazy, Suspense, useEffect } from "react";

import { useMoralisQuery, useNFTBalances } from "react-moralis";
import { shallowEqual, useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";

import Layout from "./components/Layout";
import Loader from "./components/loader/Loader";
// import NFTDetailContainer from "./components/NFTDetail/NFTDetailComponent";
import AnimatedCursorComponent from "./components/ReusableComponents/AnimatedCursorComponent";
import {
  getAnimationNFT,
  getNFT,
} from "./redux/features/marketplace/marketplaceSlice";
import { useAppSelector } from "./redux/hook";
import routes from "./routes";
const Home = lazy(() => import("./components/Home/Home"));
const NotFound = lazy(() => import("./components/notFound/NotFound"));
const NftDetailPage = lazy(() => import("./pages/dinamic-pages/NFTDetail"));

export type MoralisNFTData = any;

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { getNFTBalances, data }: MoralisNFTData = useNFTBalances();

  const { progress, connectWalletState, createPopupState, menuPopupState } =
    useAppSelector(
      ({ createData }) => ({
        progress: createData.data.progress,
        connectWalletState: createData.data.connectWalletState,
        menuPopupState: createData.data.menuPopupState,
        createPopupState: createData.data.createPopupState,
      }),
      shallowEqual
    );
  const itemPageRout = localStorage.getItem("item-page-rout");
  useEffect(() => {
    progress !== 0 || connectWalletState || createPopupState || menuPopupState
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [progress, connectWalletState, createPopupState, menuPopupState]);
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, [pathname]);

  const qyerryDataGemToken = useMoralisQuery("Listings");

  const tokens = qyerryDataGemToken.data[0];

  useEffect(() => {
    getNFTBalances({
      params: {
        address: tokens?.attributes.receiver,
      },
    });
  }, [getNFTBalances, tokens]);

  useEffect(() => {
    if (data !== null) {
      dispatch(getAnimationNFT(data.result));
      dispatch(getNFT(data.result));
    }
  }, [data, dispatch]);

  return (
    <div className="App">
      <AnimatedCursorComponent />
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map((route) => (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
                exact={true}
              />
            ))}
            <Route
              path={`${itemPageRout}`}
              exact={true}
              component={NftDetailPage}
            />
            <Route path="/" exact={true} component={Home} />
            {/* <CreatorPage /> */}
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
