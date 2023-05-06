import React, { useEffect, useState } from "react";
import "./Stack_p.css";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getpoolDetail, getUserRank } from "../../Redux/poolInfo/action";
import RankIcon from "../Assets/icons.png";
import { BsFillStopwatchFill } from "react-icons/bs";
import {
  financeAppContractAddress,
  financeAppContract_Abi,
} from "../../utilies/Contract";
import { toast } from "react-toastify";
function Stack_p() {
  let acc = useSelector((state) => state.connect?.connection);
  // let acc = '0x4c8079b7FE5acD7fFa74662Ab5EfDc86E1B1DAc8';
  let { totalUsers } = useSelector((state) => state.poolInfo);
  let { userRank } = useSelector((state) => state.userRank);
  const [boosterTime, setBoosterTime] = useState(0);
  const [rewardTime, setRewardTime] = useState("0");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getpoolDetail(acc));
  }, []);
  const getRank = async () => {
    if (acc == "No Wallet") {
      console.log("No Wallet");
    } else if (acc === "Wrong Network") {
      console.log("Wrong Wallet");
    } else if (acc === "Connect Wallet") {
      console.log("Connect Wallet");
    } else {
      dispatch(getUserRank(acc));
    }
  };
  const getBoosterTime = async () => {
    try {
      console.log(acc, "acc");
      if (acc === "No Wallet") {
        console.log("No Wallet");
      } else if (acc == "Wrong Network") {
        console.log("Wrong Wallet");
      } else if (acc == "Connect Wallet") {
        console.log("Connect Wallet");
      } else {
        const web3 = window.web3;
        let financeAppcontractOf = new web3.eth.Contract(
          financeAppContract_Abi,
          financeAppContractAddress
        );
        let booster = await financeAppcontractOf.methods
          .getTimeDiffer(acc)
          .call();
        let boostert = await financeAppcontractOf.methods.boosterDay().call();
        const length = await financeAppcontractOf.methods
          .getOrderLength(acc)
          .call();

        // let boosterFlag = false;
        let boosterFlag = await financeAppcontractOf.methods
          .getBoosterTeamDeposit(acc)
          .call();

        if (booster < 10 && length >= 1) {
          setBoosterTime(10 - booster);
          let reward = await financeAppcontractOf.methods
            .getROI(acc, length - 1)
            .call();
          if (reward[2] <= 100) {
            reward = reward[1] - reward[2];
          } else {
            reward = "Cycles are completed";
          }
          console.log('reward', reward);

          setRewardTime(reward);
          // let boosterMsg;
          // let boosterEndTime = boostert - booster;
          // if (boosterEndTime <= 0) {
          //   if (boosterFlag) {
          //     boosterMsg = "Booster Qualified";
          //     setBoosterTime(boosterMsg);
          //   } else {
          //     boosterMsg = "Booster not Qualified";
          //     setBoosterTime(boosterMsg);
          //   }
          // }
        } else {
          let reward = await financeAppcontractOf.methods
            .getROI(acc, length - 1)
            .call();
          if (reward[2] <= 100) {
            reward = reward[1] - reward[2];
          } else {
            reward = "Cycles are completed";
          }

          setRewardTime(reward);
          let boosterMsg;
          if (boosterFlag) {
            boosterMsg = "Booster Qualified";
            setBoosterTime(boosterMsg);
          } else {
            boosterMsg = "Booster not Qualified";
            setBoosterTime(boosterMsg);
          }
        }

        let reward = await financeAppcontractOf.methods
          .getROI(acc, length - 1)
          .call();
        if (reward[2] <= 100) {
          reward = reward[1] - reward[2];
        } else {
          reward = "Cycles are completed";
        }

        setRewardTime(reward);
      }
    } catch (error) {
      // console.log(" ");
    }
  };
  useEffect(() => {
    getRank();
    getBoosterTime();
  }, [acc]);

  useEffect(() => {
    setInterval(() => {
      getBoosterTime();
    }, 30000);
  }, [acc]);
  // useEffect(() => {
  //   getBoosterTime();
  // }, [acc]);
  return (
    <div className="main_stack_p_bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card stacking_p_card">
              <div className="row">
                <div className="col-lg-6 col-md-12 mt-3">
                  <div className="inner_stack_p">
                    <div className="mt-3">
                      <FaUserAlt className="icon_color fs-3"></FaUserAlt>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-center text_card">Team Size</h3>
                      <p className="mt-3 text-center text_card">{totalUsers}</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 mt-3">
                  <div className="inner_stack_p">
                    <div className="mt-3">
                      <img
                        src={RankIcon}
                        width={"30px"}
                        className="img-fluid"
                        alt=""
                      ></img>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-center text_card">User Rank</h3>
                      <p className=" mt-3 text-center text_card">
                        {" "}
                        {userRank ? userRank : "No Rank"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-3">
                  <div className="inner_stack_p">
                    <div className="mt-3">
                      <BsFillStopwatchFill className="icon_color fs-3"></BsFillStopwatchFill>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-center text_card">Booster Time</h3>
                      <p className="mt-3 text-center text_card">
                        {boosterTime && (
                          <span className="text_card">{boosterTime}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mt-3">
                  <div className="inner_stack_p">
                    <div className="mt-3">
                      <BsFillStopwatchFill className="icon_color fs-3"></BsFillStopwatchFill>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-center text_card">Cycle Time</h3>
                      <p className="mt-3 text-center text_card">{rewardTime}</p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6 mt-3">
                  <div className="card inner_stack_p">
                    <div className="mt-3">
                      {" "}
                      <FaUserAlt className="icon_color fs-3"></FaUserAlt>
                    </div>

                    <div className="mt-3">
                      <h3 className="stack_p_h3 mb-2 stack_part ">
                        Participants
                      </h3>
                      <p className="mt-3 text-white  stack_part1">
                        {totalUsers}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-3">
                  <div className="card inner_stack_p">
                    <div className="mt-3">
                      {" "}
                      <img
                        src={RankIcon}
                        width={"40px"}
                        className="icon_color fs-3"
                        alt=""
                      ></img>
                    </div>

                    <div className="mt-3">
                      <h3 className="stack_p_h3  stack_part mb-2">User Rank</h3>
                      <p className="mt-3 text-white  stack_part1">
                        {userRank ? userRank : "No Rank"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-3">
                  <div className="card inner_stack_p">
                    <div className="mt-3">
                      <BsFillStopwatchFill className="icon_color fs-3"></BsFillStopwatchFill>
                    </div>

                    <div className="mt-3">
                      <h3 className="  stack_p_h3  stack_part ">
                        Booster Time
                      </h3>
                      <p className="mt-3 text-white text-center stack_part1">
                        {boosterTime && (
                          <span className="stack_p stack_part1">
                            {boosterTime}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-3">
                  <div className="card inner_stack_p">
                    <div className="mt-3">
                      <BsFillStopwatchFill className="icon_color fs-3"></BsFillStopwatchFill>
                    </div>

                    <div className="mt-3">
                      <h3 className="stack_p_h3  stack_part mb-2">
                        Cycle Time
                      </h3>
                      <p className="mt-3 text-white  stack_part1">
                        {rewardTime}
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-lg-6 mt-3">
                  <div className="card inner_stack_p">
                    <div className="mt-3">
                      <BsFillStopwatchFill className="icon_color fs-3"></BsFillStopwatchFill>
                    </div>

                    <div className="mt-3">
                      <h3 className="stack_p_h3 mb-2 stack_part">
                        Cycle Time
                      </h3>
                      <p className="stack_p stack_p_responsive stack_part1">
                        {rewardTime}
                     
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <div className="row mt-4">
                <div className="col-lg-6 mt-3">
                  <div className="card inner_stack_p">
                    <div className="mt-3">
                      {" "}
                      <BsStars className="icon_color fs-3"></BsStars>
                    </div>

                    <div className="mt-3">
                      <h3 className="stack_p_h3 mb-2">Double Diamond Pool
                      </h3>
                      <p className="mt-3 text-white text-start">${Number(doubleDiamond).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-3">
                  <div className="card inner_stack_p">
                    <div className="mt-3">
                      {" "}
                      <RiMessage3Fill className="icon_color fs-3"></RiMessage3Fill>
                    </div>

                    <div className="mt-3">
                      <h3 className="stack_p_h3 mb-2">Top Pool</h3>
                      <p className="mt-3 text-white text-start">${Number(topPool).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack_p;
