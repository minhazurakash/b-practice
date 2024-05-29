import { Col, Pagination, Row } from "antd";
import ServiceTypeCard from "./components/ServiceTypeCard";
import SubscriptionSection from "./components/SubscriptionSection";
import CommonBanner from "./components/CommonBanner";

const App = () => {
  return (
    <div className="">
      <CommonBanner data={null} />
      <div className="container mx-auto">
        <div className="py-10">
          <Row gutter={[20, 20]}>
            <Col xs={24} md={12} lg={8}>
              <ServiceTypeCard />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <ServiceTypeCard />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <ServiceTypeCard />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <ServiceTypeCard />
            </Col>
          </Row>
          <Pagination
            className="mt-5"
            prevIcon={false}
            defaultCurrent={1}
            total={50}
          />
        </div>
      </div>
      <div className="bg-[#003B49] py-10">
        <SubscriptionSection />
      </div>
    </div>
  );
};

export default App;
