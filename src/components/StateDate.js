import React, { useState } from 'react';
import Data from '../data';
const StateDate = () => {

  const [mapData,setMapData] = useState(Data);
  console.log("#", mapData.title);

  return (
    <>
   
    <div className="col-md-5 ">
              <div className="report-card-content aos-init aos-animate" data-aos="fade-right">
                
                <div className="report-select-wrap col-md-12 p-2 ">
                  <label>State</label>
                  <select className="form-select shadow bg-body border" id="states">
                    <option value="" selected="">All India</option>
                                        <option value="135">Andaman &amp; Nicobar Islands</option>
                                        <option value="128">Andhra Pradesh</option>
                                        <option value="112">Arunachal Pradesh</option>
                                        <option value="118">Assam</option>
                                        <option value="110">Bihar</option>
                                        <option value="104">Chandigarh</option>
                                        <option value="122">Chhattisgarh</option>
                                        <option value="126">Dadra &amp; Nagar Haveli</option>
                                        <option value="125">Daman &amp; Diu</option>
                                        <option value="107">Delhi</option>
                                        <option value="130">Goa</option>
                                        <option value="124">Gujarat</option>
                                        <option value="106">Haryana</option>
                                        <option value="102">Himachal Pradesh</option>
                                        <option value="101">Jammu &amp; Kashmir</option>
                                        <option value="120">Jharkhand</option>
                                        <option value="129">Karnataka</option>
                                        <option value="132">Kerala</option>
                                        <option value="137">Ladakh</option>
                                        <option value="131">Lakshadweep</option>
                                        <option value="123">Madhya Pradesh</option>
                                        <option value="127">Maharashtra</option>
                                        <option value="114">Manipur</option>
                                        <option value="117">Meghalaya</option>
                                        <option value="115">Mizoram</option>
                                        <option value="113">Nagaland</option>
                                        <option value="121">Odisha</option>
                                        <option value="134">Puducherry</option>
                                        <option value="103">Punjab</option>
                                        <option value="108">Rajasthan</option>
                                        <option value="111">Sikkim</option>
                                        <option value="133">Tamil Nadu</option>
                                        <option value="136">Telangana</option>
                                        <option value="116">Tripura</option>
                                        <option value="105">Uttarakhand</option>
                                        <option value="109">Uttar Pradesh</option>
                                        <option value="119">West Bengal</option>
                    </select>
                </div>

                <div className="info-wrap" id="demographics_details">
                  <div className="infotab-content-wrap">
                    {mapData.map((id,value)=>{
                      <div className="">
                      <div className="d-flex col">
                          <div className="infotab-content light-blue-bg">
                            <div className="content">
                                <div className="box">
                                  <h3 className="title" id="area-title">{id.value.title}</h3>
                                  <p className="total-no">
                                  <span id="total_area">1,91,791 km<sup>2</sup></span>
                                  </p>
                                </div>
                                <div className="img">
                                  <img src="https://nas.gov.in/assets/front/images/area-blue.svg" alt="icon" className="img-fluid"/>
                                </div>
                            </div>
                          </div>
                          <div className="infotab-content light-pink-bg">
                            <div className="content" style={{backgroundColor:"#FEDEE9"}}>
                              <div className="box">
                                <h3 className="title">
                                  Population
                                </h3>
                                <p className="total-no" id="total_population">6,10,95,297</p>
                              </div>
                              <div className="img">
                                <img src="https://nas.gov.in/assets/front/images/population-pink.svg" alt="icon" className="img-fluid"/>
                              </div>
                            </div>
                            
                          </div>
                      </div>
                      <div className="col-md-12 col-lg-6">
                      </div>
                      <div className="d-flex col">
                          <div className="infotab-content light-green-bg">
                            <div className="content" style={{backgroundColor:"#DBEACB"}}>
                              <div className="box">
                                <h3 className="title">
                                  Density of population
                                </h3>
                                <p className="total-no">
                                <span id="population_density">319 per km<sup>2</sup></span>
                                {/* <!-- <small>per km<sup>2</sup></small> --> */}
                                </p>
                              </div>
                              <div className="img">
                                <img src="https://nas.gov.in/assets/front/images/density-green.svg" alt="icon" className="img-fluid"/>
                              </div>
                            </div>
                            
                          </div>
                          <div className="infotab-content light-yellow-bg">
                            <div className="content" style={{backgroundColor:"#F0EFD3"}}>
                              <div className="box">
                                <h3 className="title">
                                  Literacy Rate
                                </h3>
                                <p className="total-no" id="literacy_rate">75.4%</p>
                              </div>
                              <div className="img">
                                <img src="https://nas.gov.in/assets/front/images/litracy-yellow.svg" alt="icon" className="img-fluid"/>
                              </div>
                            </div>
                            
                          </div>
                      </div>
                      {/* <div className="col-md-12 col-lg-6">       
                      </div> */}
                      <div className="d-flex col">
                        <div className="infotab-content light-purple-bg">
                          <div className="content"style={{backgroundColor:"#FFD3FC"}}>
                            <div className="box">
                              <h3 className="title" id="teacher-title">Teachers in state</h3>
                              <p className="total-no" id="total_teachers">4,54,268</p>
                            </div>
                            <div className="img">
                              <img src="https://nas.gov.in/assets/front/images/teacher-purple.svg" alt="icon" className="img-fluid" />
                            </div>
                          </div>
                        </div>
                        <div className="infotab-content light-sagegreen-bg">
                            <div className="content" style={{backgroundColor:"#DBEFF0"}}>
                              <div className="box">
                                <h3 className="title">
                                  Child sex ratio (0-6 years)
                                </h3>
                                <p className="total-no">
                                <span id="sex_ratio">948girls per 1000 boys</span>
                                {/* <!-- <small>girls per 1000 boys</small> --> */}
                                </p>
                              </div>
                              <div className="img">
                                <img src="https://nas.gov.in/assets/front/images/child-sagegreen.svg" alt="icon" className="img-fluid"/>
                              </div>
                            </div>
                          </div>
                      </div>
                      {/* <div className="col-md-12 col-lg-6">
                      </div> */}
                    </div>
                    })}
                    
                  </div>
                </div>
                
                <div className="btn-wrap">
                <a href="javascript:void(0);" onclick="goToReportCard()" className="black-link">
                    Read More
                    <span className="material-icons-round">
                      {/* -> */}
                    </span>
                  </a>
                </div>
                  
              </div>
          </div>
    </>
  )
}

export default StateDate
