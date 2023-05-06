// import React, { useState } from "react";
// import { useEffect } from "react";
// import {
//   financeAppContractAddress,
//   financeAppContract_Abi,
// } from "../../utilies/Contract";
// import { toast } from "react-toastify";
// import { useSelector, useDispatch } from "react-redux";

// function CommisionTable() {
//   const [rewarData, setRewardData] = useState({ Statics: 0,
//     Directs: 0,
//     Diamond: 0,
//     DoubleDiamond: 0,
//     Level1ROllncome: 0,
//     Level4ROllncome: 0,
//     Level5ROllncome: 0,
//     DirectsPool: 0,
//     BinaryPool: 0,
//     GoldPool: 0,
//     DiamondPool: 0,
//     Split: 0,
//     SplitDebt: 0,
//     TotalWithdrawls: 0,});

//   let acc = useSelector((state) => state.connect?.connection);
//   acc = "0x4c8079b7FE5acD7fFa74662Ab5EfDc86E1B1DAc8";
//   const rewardInfo = async () => {
//     try {
//       console.log(acc, "acc");
//       if (acc === "No Wallet") {
//         console.log("No Wallet");
//       } else if (acc == "Wrong Network") {
//         console.log("Wrong Wallet");
//       } else if (acc == "Connect Wallet") {
//         console.log("Connect Wallet");
//       } else {
//         const web3 = window.web3;
//         let financeAppcontractOf = new web3.eth.Contract(
//           financeAppContract_Abi,
//           financeAppContractAddress
//         );
//         let rewardInfoData = await financeAppcontractOf.methods
//           .rewardInfo(acc)
//           .call();
//         setRewardData(rewardInfoData);
//         console.log("Reward Data", rewardInfoData);
//       }
//       console.log("ddd", rewarData);
//     } catch (error) {
//       // console.log(" ");
//     }
//   };
//   useEffect(() => {
//     rewardInfo();
//   }, [acc]);
//   const tableData = [
//     {
//       key: "Statics",
//       value: rewardData["Statics"] || 0,
//     },
//     {
//       key: "Directs",
//       value: rewardData["Directs"] || 0,
//     },
//     {
//       key: "Diamond",
//       value: rewardData["Diamond"] || 0,
//     },
//     {
//       key: "DoubleDiamond",
//       value: rewardData["DoubleDiamond"] || 0,
//     },
//     {
//       key: "Level1ROllncome",
//       value: rewardData["Level1ROllncome"] || 0,
//     },
//     {
//       key: "Level4ROllncome",
//       value: rewardData["Level4ROllncome"] || 0,
//     },
//     {
//       key: "Level5ROllncome",
//       value: rewardData["Level5ROllncome"] || 0,
//     },
//     {
//       key: "DirectsPool",
//       value: rewardData["DirectsPool"] || 0,
//     },
//     {
//       key: 'BinaryPool',
//       value: rewardData['BinaryPool'] || 0,
//     },
//     {
//       key: 'GoldPool',
//       value: rewardData['GoldPool'] || 0,
//     },
//     {
//       key: 'DiamondPool',
//       value: rewardData['DiamondPool'] || 0,
//     },
//   ];
//   return (
//     <div>
//       <div className=" container-fluid">
//         <div className="heading text-white pt-4">
//           <h3>Commission Table</h3>
//         </div>

//         <table className="table table_responsive text-white text-start  m-auto pt-5">
//           <tbody>
//             {tableData.map((data) => (
//               <>
//                 <tr>
//                   <th>Statics:</th>
//                   <td>{data.Statics}</td>
//                 </tr>
//                 <tr>
//                   <th>Directs:</th>
//                   <td>{data.Directs}</td>
//                 </tr>
//                 <tr>
//                   <th>Diamond:</th>
//                   <td>{data.Diamond}</td>
//                 </tr>
//                 <tr>
//                   <th>DoubleDiamond:</th>
//                   <td>{data.DoubleDiamond}</td>
//                 </tr>
//                 <tr>
//                   <th>Level1ROllncome:</th>
//                   <td>{data.Level1ROllncome}</td>
//                 </tr>
//                 <tr>
//                   <th>Level4ROllncome:</th>
//                   <td>{data.Level4ROllncome}</td>
//                 </tr>
//                 <tr>
//                   <th>Level5ROllncome:</th>
//                   <td>{data.Level5ROllncome}</td>
//                 </tr>
//                 <tr>
//                   <th>DirectsPool:</th>
//                   <td>{data.DirectsPool}</td>
//                 </tr>
//                 <tr>
//                   <th>Split:</th>
//                   <td>{data.Split}</td>
//                 </tr>
//                 <tr>
//                   <th>SplitDebt:</th>
//                   <td>{data.SplitDebt}</td>
//                 </tr>
//                 <tr>
//                   <th>TotalWithdrawls:</th>
//                   <td>{data.TotalWithdrawls}</td>
//                 </tr>
//               </>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CommisionTable;
