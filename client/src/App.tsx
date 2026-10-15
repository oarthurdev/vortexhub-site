import { Route, Router, Switch } from "wouter";
import { SiteLayout } from "@/components/layout/site-layout";
import Home from "@/pages/home";
import ServicesPage from "@/pages/services";
import ServicePage from "@/pages/service";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import PrivacyPage from "@/pages/privacy";
import NotFound from "@/pages/not-found";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicos" component={ServicesPage} />
      <Route path="/servicos/:slug">{(params) => <ServicePage slug={params.slug} />}</Route>
      <Route path="/sobre" component={AboutPage} />
      <Route path="/contato" component={ContactPage} />
      <Route path="/privacidade" component={PrivacyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

/** `ssrPath` is only passed by the build-time prerenderer (entry-server.tsx). */
export default function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <Router ssrPath={ssrPath}>
      <SiteLayout>
        <Routes />
      </SiteLayout>
    </Router>
  );
}
