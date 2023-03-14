import React from "react";
import { Space, Image, Typography, Button } from "antd";

const { Title } = Typography;

export const ShippingOut = () => {
  return (
    <Space direction="vertical">
      <Space direction="vertical" size="large">
        <Space
          direction="horizontal"
          size="small"
          style={{
            display: "flex",
            alignItems: "start",
          }}
        >
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <Image
              width={150}
              height={150}
              src="https://www.cuyana.com/dw/image/v2/BDQQ_PRD/on/demandware.static/-/Sites-master-catalog-cuyana/default/dw60696187/images/2023_01Jan/easy-tote-dark-coral/PLP_Hero_1080x1350_SP23_EasyTote_DarkCoral_Hero_2785.jpg?sw=768&sh=1152"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <Space direction="vertical" size="small">
            <Title level={4} style={{ marginBottom: 0 }}>
              Vintage Backbag
            </Title>
            <Space direction="horizontal" size="middle">
              <Title level={5} type="warning">
                $500
              </Title>
              <Title level={5} delete>
                $1000
              </Title>
            </Space>
            <Space
              direction="horizontal"
              size="middle"
              className="count-mid"
              style={{
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button type="text">-</Button>
              <span>1</span>
              <Button type="text">+</Button>
            </Space>
          </Space>
        </Space>
        <Space
          direction="horizontal"
          size="small"
          style={{
            display: "flex",
            alignItems: "start",
          }}
        >
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <Image
              width={150}
              height={150}
              src="https://www.cuyana.com/dw/image/v2/BDQQ_PRD/on/demandware.static/-/Sites-master-catalog-cuyana/default/dw60696187/images/2023_01Jan/easy-tote-dark-coral/PLP_Hero_1080x1350_SP23_EasyTote_DarkCoral_Hero_2785.jpg?sw=768&sh=1152"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <Space direction="vertical" size="small">
            <Title level={4} style={{ marginBottom: 0 }}>
              Vintage Backbag
            </Title>
            <Space direction="horizontal" size="middle">
              <Title level={5} type="warning">
                $500
              </Title>
              <Title level={5} delete>
                $1000
              </Title>
            </Space>
            <Space
              direction="horizontal"
              size="middle"
              className="count-mid"
              style={{
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button type="text">-</Button>
              <span>1</span>
              <Button type="text">+</Button>
            </Space>
          </Space>
        </Space>
      </Space>
      <Space className="checkout-price" direction="vertical">
        <div className="price-check">
          <h4>Shipping</h4>
          <span>$19</span>
        </div>
        <div className="price-check">
          <h4>Total</h4>
          <span>$38</span>
        </div>
      </Space>
    </Space>
  );
};
