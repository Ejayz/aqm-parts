import IndexHeader from "@/components/UI/IndexHeader";
import ContactView from "@/components/VIEW/ContactView";
import HomeView from "@/components/VIEW/HomeView";
import Product from "@/components/VIEW/ProductView";
import ServiceView from "@/components/VIEW/ServiceView";
import TeamView from "@/components/VIEW/TeamView";
export default function Home() {
  return (
    <IndexHeader>
      <HomeView></HomeView>
      <Product></Product>
      <ContactView></ContactView>
      <ServiceView></ServiceView>
      <TeamView />
    </IndexHeader>
  );
}
