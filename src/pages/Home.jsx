import React from "react"
import "../assets/css/styles.css"
import {Navbar, Container, Nav} from "react-bootstrap"

class Home extends React.Component {

    render(){
        return(
           <>
           <div className="container-fluid">
            <Navbar collapseOnSelect expand="lg" bg="muted" variant="dark" className="head-section mt-2">
                    <Container fluid>
                        <Navbar.Brand href="#home">
                            <img src="https://cdn.discordapp.com/attachments/890238141687009300/956515164537118770/ccoess.png" alt="logo-ccoess" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Trending</Nav.Link>
                                <Nav.Link href="#pricing">Discover</Nav.Link>
                                <Nav.Link href="#pricing">Tracker</Nav.Link>
                            </Nav>
                            <Nav>
                            <Nav.Link href="#deets">
                                <input type="text" className="form-control bg-dark text-secondary" placeholder="Search Everything" />
                            </Nav.Link>
                            <Nav.Link href="#deets">
                                <button className="mt-1 btn-primary btn-sm btn-head active">Connect</button>
                            </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
            <div className="mt-4 pt-2 body-section mx-4">
                {/* asset box */}
                <div className="col-12 col-md-12 mt-4 mb-4">
                    <div className="row">
                        <div className="mb-4 col-12 col-md-3">
                            <div className="row mx-1 set-radius bg-dark shadow-sm h-100">
                                <div className="col-12 col-md-12 mx-2 mt-4 mb-4">
                                <span>NFT Asset</span>
                                <br />
                                <b className="lg-font">49.312.046</b>
                                <br />
                                <b className="mx-2 chart-font">+131,628</b>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 col-12 col-md-3">
                            <div className="row mx-1 set-radius bg-dark shadow-sm h-100">
                                <div className="col-12 col-md-12 mx-2 mt-4 mb-4">
                                <span>NFT Asset</span>
                                <br />
                                <b className="lg-font">49.312.046</b>
                                <br />
                                <b className="mx-2 chart-font">+131,628</b>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 col-12 col-md-3">
                            <div className="row mx-1 set-radius bg-dark shadow-sm h-100">
                                <div className="col-12 col-md-12 mx-2 mt-4 mb-4">
                                <span>NFT Asset</span>
                                <br />
                                <b className="lg-font">49.312.046</b>
                                <br />
                                <b className="mx-2 chart-font">+131,628</b>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 col-12 col-md-3">
                            <div className="row mx-1 set-radius bg-dark shadow-sm h-100">
                                <div className="col-12 col-md-12 mx-2 mt-4 mb-4">
                                <span>NFT Asset</span>
                                <br />
                                <b className="lg-font">49.312.046</b>
                                <br />
                                <b className="mx-2 chart-font">+131,628</b>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>

                {/*top6 nft */}
                <div className="mt-4 pt-2 mb-4">
                    <b className="lg-font">Top 6 NFT</b>
                    <div className="row mt-4">
                        <div className="col-6 col-md-2">
                            <div className="mx-1 bg-dark box-nft">
                                <div className="mt-2 mb-4 mx-2 pb-1">
                                <img src="https://nftscan.mypinata.cloud/ipfs/QmXQ5EaAJMrdCmXDrkWkrvnNmnA13hHNiTYTVbxRhsT6HY/566.png" className="mt-2" alt="trending-nft" />
                                <p className="d-flex justify-content-center mt-4">KeroVerse</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="mx-1 bg-dark box-nft">
                                <div className="mt-2 mb-4 mx-2 pb-1">
                                <img src="https://nftscan.mypinata.cloud/ipfs/QmTynTQ2dL4etGJTLDMLLsQdJdWSxKE15NG12vTbh1mzPr/0425.png" className="mt-2" alt="trending-nft" />
                                <p className="d-flex justify-content-center mt-4">KeroVerse</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="mx-1 bg-dark box-nft">
                                <div className="mt-2 mb-4 mx-2 pb-1">
                                <img src="https://nftscan.mypinata.cloud/ipfs/QmTynTQ2dL4etGJTLDMLLsQdJdWSxKE15NG12vTbh1mzPr/1455.png" className="mt-2" alt="trending-nft" />
                                <p className="d-flex justify-content-center mt-4">KeroVerse</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="mx-1 bg-dark box-nft">
                                <div className="mt-2 mb-4 mx-2 pb-1">
                                <img src="https://nftscan.mypinata.cloud/ipfs/QmNUXyvEnmc7BgtEJ77HZYKLtDHXBzpXMuSZoDyqo4ycmF" className="mt-2" alt="trending-nft" />
                                <p className="d-flex justify-content-center mt-4">KeroVerse</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="mx-1 bg-dark box-nft">
                                <div className="mt-2 mb-4 mx-2 pb-1">
                                <img src="https://nftscan.mypinata.cloud/ipfs/QmcfupwXU8rrqKEWuxDUgypu5M4FeuDWiqMpivKeG29soe" className="mt-2" alt="trending-nft" />
                                <p className="d-flex justify-content-center mt-4">KeroVerse</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="mx-1 bg-dark box-nft">
                                <div className="mt-2 mb-4 mx-2 pb-1">
                                <img src="https://dm2zb8bwza29x.cloudfront.net/0x330ceed8e9fc1c5051389fe435c8574a22efd6b2/0x0000000000000000000000000000000000000000000000000000000000000010.png" className="mt-2" alt="trending-nft" />
                                <p className="d-flex justify-content-center mt-4">KeroVerse</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-4 mb-4">
                    <div className="row">
                        {/* left column */}
                        <div className="col-12 col-md-6  mb-4 nft-mint">
                            <b className="lg-font">Mint</b>
                            <div className="d-flex mt-3 bg-dark rounded">
                                <div className="col-1 col-md-1 mx-1 mt-2">
                                   <p></p> 
                                </div>
                                <div className="col-3 col-md-3 mx-1 mt-2 mb-2">
                                    <span>Collection</span>
                                </div>
                                <div className="col-1 col-md-1 mx-1 mt-2 mb-2">
                                    <span>ID</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2">
                                    <span>Value</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2">
                                    <span>Gas</span>
                                </div>
                                <div className="col-3 col-md-3 mx-1 mt-2 mb-2">
                                    <span>Time</span>
                                </div>
                            </div>
                            <div className="d-flex mt-3 rounded">
                                <div className="col-1 col-md-1 mx-1">
                                    <img src="https://nftscan.mypinata.cloud/ipfs/QmXQ5EaAJMrdCmXDrkWkrvnNmnA13hHNiTYTVbxRhsT6HY/566.png" alt="nft-mnint" className="rounded" />
                                </div>
                                <div className="col-3 col-md-3 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>Droid Ivander</span>
                                </div>
                                <div className="col-1 col-md-1 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>1779</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>200</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>0.00089</span>
                                </div>
                                <div className="col-2 col-md-3 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>4 mins ago</span>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex mt-3 rounded">
                                <div className="col-1 col-md-1 mx-1">
                                    <img src="https://nftscan.mypinata.cloud/ipfs/QmTynTQ2dL4etGJTLDMLLsQdJdWSxKE15NG12vTbh1mzPr/0425.png" alt="nft-mnint" className="rounded" />
                                </div>
                                <div className="col-3 col-md-3 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>Droid Ivander</span>
                                </div>
                                <div className="col-1 col-md-1 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>1779</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>200</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>0.00089</span>
                                </div>
                                <div className="col-2 col-md-3 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>4 mins ago</span>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex mt-3 rounded">
                                <div className="col-1 col-md-1 mx-1">
                                    <img src="https://dm2zb8bwza29x.cloudfront.net/0x330ceed8e9fc1c5051389fe435c8574a22efd6b2/0x0000000000000000000000000000000000000000000000000000000000000010.png" alt="nft-mnint" className="rounded" />
                                </div>
                                <div className="col-3 col-md-3 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>Droid Ivander</span>
                                </div>
                                <div className="col-1 col-md-1 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>1779</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>200</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>0.00089</span>
                                </div>
                                <div className="col-2 col-md-3 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>4 mins ago</span>
                                </div>
                            </div>
                            <hr />
                        </div>

                        {/* right column */}
                        <div className="col-12 col-md-6  mb-4 nft-mint">
                            <b className="lg-font">Transfer</b>
                            <div className="d-flex mt-3 bg-dark rounded">
                                <div className="col-1 col-md-1 mx-1 mt-2">
                                   <p></p> 
                                </div>
                                <div className="col-3 col-md-3 mx-1 mt-2 mb-2">
                                    <span>Collection</span>
                                </div>
                                <div className="col-1 col-md-1 mx-1 mt-2 mb-2">
                                    <span>ID</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2">
                                    <span>Value</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2">
                                    <span>Gas</span>
                                </div>
                                <div className="col-3 col-md-3 mx-1 mt-2 mb-2">
                                    <span>Time</span>
                                </div>
                            </div>
                            <div className="d-flex mt-3 rounded">
                                <div className="col-1 col-md-1 mx-1">
                                    <img src="https://nftscan.mypinata.cloud/ipfs/QmXQ5EaAJMrdCmXDrkWkrvnNmnA13hHNiTYTVbxRhsT6HY/566.png" alt="nft-mnint" className="rounded" />
                                </div>
                                <div className="col-3 col-md-3 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>Droid Ivander</span>
                                </div>
                                <div className="col-1 col-md-1 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>1779</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>200</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>0.00089</span>
                                </div>
                                <div className="col-2 col-md-3 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>4 mins ago</span>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex mt-3 rounded">
                                <div className="col-1 col-md-1 mx-1">
                                    <img src="https://nftscan.mypinata.cloud/ipfs/QmTynTQ2dL4etGJTLDMLLsQdJdWSxKE15NG12vTbh1mzPr/0425.png" alt="nft-mnint" className="rounded" />
                                </div>
                                <div className="col-3 col-md-3 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>Droid Ivander</span>
                                </div>
                                <div className="col-1 col-md-1 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>1779</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>200</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>0.00089</span>
                                </div>
                                <div className="col-2 col-md-3 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>4 mins ago</span>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex mt-3 rounded">
                                <div className="col-1 col-md-1 mx-1">
                                    <img src="https://dm2zb8bwza29x.cloudfront.net/0x330ceed8e9fc1c5051389fe435c8574a22efd6b2/0x0000000000000000000000000000000000000000000000000000000000000010.png" alt="nft-mnint" className="rounded" />
                                </div>
                                <div className="col-3 col-md-3 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>Droid Ivander</span>
                                </div>
                                <div className="col-1 col-md-1 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>1779</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>200</span>
                                </div>
                                <div className="col-2 col-md-2 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>0.00089</span>
                                </div>
                                <div className="col-2 col-md-3 mx-1 mt-2 mb-2 text-truncate text-break">
                                    <span>4 mins ago</span>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
           </div>
           </>
        )
    }
}

export default Home