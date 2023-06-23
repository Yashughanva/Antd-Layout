import { AppstoreOutlined, UserOutlined, ScheduleOutlined, SettingFilled } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Calendar } from 'antd';
import { Button } from 'antd';
import { Space, Progress, Rate } from 'antd';
import { TeamOutlined, BarChartOutlined, DollarOutlined, CalendarOutlined, } from "@ant-design/icons";
import { ShoppingCartOutlined, CarOutlined, DeploymentUnitOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};

export const Dashboard = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const { token } = theme.useToken();

    const wrapperStyle = {
        width: 256,
        marginTop: 100,
        marginLeft: 20,
        marginBottom: 50,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    const menuitem = [{ icons: <AppstoreOutlined />, label: "Dashboard" }, { icons: <UserOutlined />, label: "Profiles" }, { icons: <SettingFilled />, label: "Subscription" }
        , { icons: <ScheduleOutlined />, label: "Customization" }]
    return (
        <>        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                width="300"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div style={{ backgroundColor: "darkgreen", border: "2px solid dimgrey", borderBottomRightRadius: "30px", borderTopRightRadius: "30px", color: "white", textAlign: "center" }}>
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" height="100px" width="100px" style={{ borderRadius: "50%" }} />
                    <h3>Tohamy</h3>
                    <p>tohamy99@yahoo.com</p>
                </div>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}

                    items={menuitem.map(
                        (item, index) => ({
                            key: String(index + 1),
                            icon: item.icons,
                            label: String(item.label),
                        }),
                    )}


                />
                <div style={wrapperStyle}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
            </Sider>
            <Layout>



                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            // padding: 24,
                            minHeight: 500,
                            background: colorBgContainer,
                        }}
                    >

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", justifyContent: "space-around", color: "white", backgroundColor: "darkgreen", border: "2px solid darkgreen", borderRadius: "10px", margin: "15px", width: "300px", padding: "15px" }}>
                                <div>
                                    <h5>Total balance</h5>
                                    <h3>$2256</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <TeamOutlined style={{ fontSize: "50px" }} />
                                    {/* <img src="https://icons.veryicon.com/png/o/business/official-icon-of-qianjinding-supply-chain-2/balance-10.png" height="40px" width="40px" /> */}
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#FCC400", border: "2px solid yellow", borderRadius: "10px", margin: "15px", width: "300px", padding: "15px" }}>
                                <div>
                                    <h5>Total sales</h5>
                                    <h3>24</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <BarChartOutlined style={{ fontSize: "50px" }} />
                                    {/* <img src="https://cdn-icons-png.flaticon.com/128/3144/3144573.png" height="40px" width="40px" /> */}
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", color: "white", backgroundColor: "darkgreen", border: "2px solid darkgreen", borderRadius: "10px", margin: "15px", width: "300px", padding: "15px" }}>
                                <div>
                                    <h5>Total expenses</h5>
                                    <h3>$12</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <DollarOutlined style={{ fontSize: "50px" }} />
                                    {/* <img src="https://cdn-icons-png.flaticon.com/128/2488/2488980.png" height="40px" width="40px" /> */}
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", color: "white", backgroundColor: "darkblue", border: "2px solid darkblue", borderRadius: "10px", margin: "15px", width: "300px", padding: "15px" }}>
                                <div>
                                    <h5>Total visitors</h5>
                                    <h3>3</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div><CalendarOutlined style={{ fontSize: "50px" }}
                                />
                                    {/* <img src="https://cdn-icons-png.flaticon.com/512/634/634013.png" height="40px" width="40px" /> */}
                                </div>
                            </div>
                        </div>


                        <div className="raw">
                            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "2%" }}>
                                <div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <h3>Observations</h3>
                                        </div>
                                        <div>
                                            <Button type="link">View All</Button></div>
                                    </div>
                                    <div style={{ border: "1px solid", borderRadius: "8px", width: "550px", padding: "10px", height: "80px", margin: "10px", display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <Space wrap>
                                                <Progress type="circle" percent={80} size={50} />
                                            </Space>
                                        </div>
                                        <div>
                                            <h6>Taylor Swift</h6>
                                            <p>24 April,2023 | 04:00 PM</p><br />
                                        </div>
                                        <div>
                                            <Rate disabled defaultValue={1} />
                                        </div>
                                        <div>
                                            <button class="button-2">2 days Left</button>
                                        </div>
                                    </div>
                                    <div style={{ border: "1px solid", borderRadius: "8px", width: "550px", padding: "10px", height: "80px", margin: "10px", display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <Space wrap>
                                                <Progress type="circle" strokeColor="#9900EF" percent={85} size={50} />
                                            </Space>
                                        </div>
                                        <div>
                                            <h6>Well Smith</h6>
                                            <p>15 April,2023 | 04:00 PM</p><br />
                                        </div>
                                        <div>
                                            <Rate disabled defaultValue={1} />
                                        </div>
                                        <div>
                                            <button class="button-2">2 days Left</button>
                                        </div>
                                    </div>
                                    <div style={{ border: "1px solid", borderRadius: "8px", width: "550px", padding: "10px", height: "80px", margin: "10px", display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <Space wrap>
                                                <Progress type="circle" strokeColor="red" percent={68} size={50} />
                                            </Space>
                                        </div>
                                        <div>
                                            <h6>Johnson</h6>
                                            <p>10 April,2023 | 04:00 PM</p><br />
                                        </div>
                                        <div>
                                            <Rate disabled defaultValue={4} />
                                        </div>
                                        <div>
                                            <button class="button-2">2 days Left</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div>
                                            <ShoppingCartOutlined style={{ fontSize: "50px" }} />
                                            {/* <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" height="30px" width="30px" /> */}
                                        </div>
                                        <div>
                                            <Progress percent={52} status="active" style={{ width: "600px" }} strokeColor="#FCC400" />
                                            <h6>Shopping</h6>

                                            {/* <hr style={{ borderRadius: "10px", border: "10px solid yellow", width: "600px" }} />Shopping */}
                                        </div>
                                    </div><br />
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div>
                                            <DeploymentUnitOutlined style={{ fontSize: "50px" }} />
                                            {/* <img src="https://cdn-icons-png.flaticon.com/512/2432/2432572.png" height="30px" width="30px" /> */}
                                        </div>
                                        <div>
                                            <Progress percent={21} status="active" style={{ width: "600px" }} strokeColor="#FCC400" />
                                            <h6>Electronics</h6>
                                            {/* <hr style={{ borderRadius: "10px", border: "10px solid pink", width: "600px" }} />Electronics */}
                                        </div>
                                    </div><br />
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div>
                                            <CarOutlined style={{ fontSize: "50px" }} />
                                            {/* <img src="https://www.iconbolt.com/preview/facebook/voyage-icons/international-travel.svg" height="30px" width="30px" /> */}
                                        </div>
                                        <div>
                                            <Progress percent={74} status="active" style={{ width: "600px" }} strokeColor="black" />
                                            <h6>Travels</h6>
                                            {/* <hr style={{ borderRadius: "10px", border: "10px solid yellow", width: "600px" }} />Travels */}
                                        </div>
                                    </div><br />
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div>
                                            <CarOutlined style={{ fontSize: "50px" }} />
                                            {/* <img src="https://www.iconbolt.com/preview/facebook/voyage-icons/international-travel.svg" height="30px" width="30px" /> */}
                                        </div>
                                        <div>
                                            <Progress percent={74} status="active" style={{ width: "600px" }} strokeColor="#FCC400" />
                                            <h6>Travels</h6>
                                            {/* <hr style={{ borderRadius: "10px", border: "10px solid pink", width: "600px" }} />Travels */}
                                        </div>
                                    </div><br />
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div>
                                            <CarOutlined style={{ fontSize: "50px" }} />
                                            {/* <img src="https://www.iconbolt.com/preview/facebook/voyage-icons/international-travel.svg" height="30px" width="30px" /> */}
                                        </div>
                                        <div>
                                            <Progress percent={74} status="active" style={{ width: "600px" }} strokeColor="black" />
                                            <h6>Travels</h6>
                                            {/* <hr style={{ borderRadius: "10px", border: "10px solid yellow", width: "600px" }} />Travels */}
                                        </div>
                                    </div><br />
                                </div>
                            </div>
                        </div>
                    </div>

                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqS9fF2adapfO94zEfcEY5L8MyuP57SzgYK45maiZyAIBLmxCFajMtVbnVb09HiKN5y8&usqp=CAU" height="250px" width="750px" alt="image not found" style={{
                                border: "1px solid ", borderRadius: "8px"
                            }} />
                        </div>
                        <div>
                            <ul style={{ listStyleType: "none" }}>
                                <li><img src="https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG.jpg" height="60px" width="60px" />Google</li>
                                <li><img src="https://cdn-icons-png.flaticon.com/512/4926/4926581.png" height="60px" width="60px" />Foursqure</li>
                                <li><img src="https://cdn-icons-png.flaticon.com/512/1051/1051281.png" height="60px" width="60px" />Kickstarter</li>
                                <li><img src="https://static.vecteezy.com/system/resources/previews/000/638/514/original/vector-talking-bubble-chat-icon.jpg" height="60px" width="60px" />Talk</li>
                            </ul>
                        </div>
                    </div>
                </Footer>
            </Layout>
        </Layout>
        </>

    );
};
export default Dashboard;