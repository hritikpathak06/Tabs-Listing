import { useState } from "react";
import { TabsData, TabsDataProps } from "./data/sample";
import Modal from "./hooks/Modal";

const App = () => {
  const tabsData: TabsDataProps = TabsData;
  // const [tabsData, setTabsData] = useState<TabsDataProps | any>(TabsData);
  const [selectedTab, setSelectedTab] = useState<any>(tabsData.Tab1);
  const [activeTabKey, setActiveTabKey] = useState<string>("Tab1");
  const [leftImg, setLeftImg] = useState<string>(selectedTab.smallImage2);
  const [rightImg, setRightImg] = useState<string>(selectedTab.rightImg);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleTabClick = (tabKey: string) => {
    const newTab = tabsData[tabKey as keyof TabsDataProps];
    setSelectedTab(newTab);
    setActiveTabKey(tabKey);
    setLeftImg(newTab?.smallImage2 as any);
    setRightImg(newTab.rightImg);
  };

  const handleSmallImageClick = (image: string, isLeft: boolean) => {
    if (isLeft) {
      setLeftImg(image);
    } else {
      setRightImg(image);
    }
  };

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
    setIsVisible(false);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
    setIsVisible(true);
  };

  return (
    <>
      <div className="container">
        <div className="heading_container">
          <div className="circular_line_container">
            <svg
              className="circular_svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 250"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="
        M 250, 250
        m -200, 0
        a 200,200 0 1,0 400,0
        a 200,200 0 1,0 -400,0
      "
                stroke="#e0e0e0"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <h1>Bring Out The Beauty Of The Products</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint illum
            nemo similique dignissimos molestias nulla non? Perspiciatis
            quisquam, eveniet adipisci aliquam porro voluptatibus ad omnis
            deserunt mollitia alias quia dolores. Commodi accusantium at
            quibusdam eligendi assumenda temporibus reiciendis quod nisi.
          </p>
        </div>

        <div className="tabs_container">
          <ul className="tabs_ul">
            <li>
              <button
                className={activeTabKey === "Tab1" ? "active" : ""}
                onClick={() => handleTabClick("Tab1")}
              >
                Outdoor
              </button>
            </li>
            <li>
              <button
                className={activeTabKey === "Tab2" ? "active" : ""}
                onClick={() => handleTabClick("Tab2")}
              >
                Studio
              </button>
            </li>
            <li>
              <button
                className={activeTabKey === "Tab3" ? "active" : ""}
                onClick={() => handleTabClick("Tab3")}
              >
                Try On
              </button>
            </li>
            <li>
              <button
                className={activeTabKey === "Tab4" ? "active" : ""}
                onClick={() => handleTabClick("Tab4")}
              >
                Diversity
              </button>
            </li>
          </ul>
        </div>

        <div className="image_container">
          <div className="left_image_container">
            {isVisible && (
              <>
                <div className="main_box">
                  <div className="box">
                    <img
                      src={selectedTab.smallImage1}
                      alt=""
                      className="box_image"
                      onClick={() =>
                        handleSmallImageClick(selectedTab.smallImage1, true)
                      }
                    />
                  </div>
                  <div className="box">
                    <img
                      src={selectedTab.smallImage2}
                      alt=""
                      className="box_image"
                      onClick={() =>
                        handleSmallImageClick(selectedTab.smallImage2, true)
                      }
                    />
                  </div>
                  <div className="box">
                    <img
                      src={selectedTab.smallImage3}
                      alt=""
                      className="box_image"
                      onClick={() =>
                        handleSmallImageClick(selectedTab.smallImage3, true)
                      }
                    />
                  </div>
                </div>
              </>
            )}
            <img
              className="tab_img"
              src={leftImg}
              alt="Left Tab"
              onClick={() => openModal(leftImg)}
            />
          </div>
          <div className="center_image_container">
            <img
              className="center_img"
              src={selectedTab.centerImg}
              alt="Center Tab"
            />
            <div className="absolute_img">
              <img
                className="abs_img"
                src="https://thumbs.dreamstime.com/b/icon-red-arrow-to-right-round-edges-icon-red-arrow-to-right-round-edges-white-background-122546659.jpg"
                alt="Arrow"
              />
            </div>
          </div>
          <div className="right_image_container">
            <img
              className="tab_img"
              src={rightImg}
              alt="Right Tab"
              onClick={() => openModal(rightImg)}
            />
            {isVisible && (
              <>
                <div className="right_box1 right_box">
                  <img
                    src={selectedTab.smallImage1}
                    alt=""
                    className="box_image"
                    onClick={() =>
                      handleSmallImageClick(selectedTab.smallImage1, false)
                    }
                  />
                </div>
                <div className="right_box2 right_box">
                  <img
                    src={selectedTab.smallImage2}
                    alt=""
                    className="box_image"
                    onClick={() =>
                      handleSmallImageClick(selectedTab.smallImage2, false)
                    }
                  />
                </div>
                <div className="right_box3 right_box">
                  <img
                    src={selectedTab.smallImage3}
                    alt=""
                    className="box_image"
                    onClick={() =>
                      handleSmallImageClick(selectedTab.smallImage3, false)
                    }
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal image={modalImage} isOpen={isModalOpen} onClose={closeModal} />{" "}
      {/* Modal Component */}
    </>
  );
};

export default App;
