import { Button, Typography, Space, Input, Checkbox } from "antd";
import { useState } from "react";
import "./css/app.css";
import {
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  HomeFilled,
  EnvironmentOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { ShippingOut } from "./components/ShippingOut";

const { Title } = Typography;

function App() {
  const InputComponents = ({ text = "E-mail", icons, placeholder }: any) => {
    return (
      <Space direction="vertical" size="small" style={{ width: "100%" }}>
        <label className="label-input">{text}</label>
        <Input
          size="large"
          placeholder={placeholder}
          prefix={icons}
          style={{ width: "100%", border: "2px solid #828282" }}
        />
      </Space>
    );
  };

  return (
    <div className="container-main">
      <Title level={2}>Checkout</Title>
      <div className="main-content">
        <Space
          direction="vertical"
          size="large"
          style={{ width: "100%", padding: "0px 50px" }}
        >
          <Space
            direction="vertical"
            size="small"
            style={{ width: "100%", paddingBottom: 40 }}
          >
            <Title level={4} style={{ marginBottom: 0 }}>
              Contact Information
            </Title>
            <InputComponents
              icons={<MailOutlined style={{ marginRight: "2px" }} />}
              placeholder="Enter your email.."
            />
            <InputComponents
              icons={<PhoneOutlined style={{ marginRight: "2px" }} />}
              placeholder="Enter your phone..."
              text="Phone"
            />
          </Space>
          <Space direction="vertical" size="small" style={{ width: "100%" }}>
            <Title level={4} style={{ marginBottom: 0 }}>
              Shipping Address
            </Title>
            <InputComponents
              icons={<UserOutlined style={{ marginRight: "2px" }} />}
              placeholder="Your name.."
              text="Full Name"
            />
            <InputComponents
              icons={<HomeFilled style={{ marginRight: "2px" }} />}
              placeholder="Your address.."
              text="Address"
            />
            <InputComponents
              icons={<EnvironmentOutlined style={{ marginRight: "2px" }} />}
              placeholder="Your city.."
              text="City"
            />
            <Space
              direction="horizontal"
              size="small"
              style={{ justifyContent: "space-between", display: "flex" }}
            >
              <InputComponents
                icons={<GlobalOutlined style={{ marginRight: "2px" }} />}
                placeholder="Your country.."
                text="Country"
              />
              <InputComponents
                icons={<GlobalOutlined style={{ marginRight: "2px" }} />}
                placeholder="Your post code.."
                text="Post Code"
              />
            </Space>
            <Checkbox>Save this information for next time</Checkbox>
          </Space>
          <button className="btn-continue">Continue</button>
        </Space>

        <div
          style={{
            background: "#F2F2F2",
            padding: "20px",
            height: "fit-content",
            borderRadius: 10,
          }}
        >
          <ShippingOut />
        </div>
      </div>
    </div>
  );
}

export default App;
