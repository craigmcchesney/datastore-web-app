import { Outlet, Link } from "react-router-dom";
import PageLink from "../components/PageLink"

const Layout = ({datastoreConfig}) => {
    return (
        <>
            <div id="page-wrapper" className="flex flex-row w-screen h-screen overflow-hidden font-open-sans">
                <div id="left-wrapper" className="flex flex-col w-80 bg-slate-200 bg-opacity-40 border-r-2 border-black border-opacity-5 shadow-lg">
                    <div id="left-header" className="flex items-end h-24 border-b">
                        <div id="osprey" className="ml-6 mb-6 font-glegoo text-xl font-bold">
                            <a href="https://ospreydcs.com/" >Osprey DCS </a>
                        </div>
                    </div>
                    <div id="left-body" className="flex flex-col">
                        <div id="nav-links" className="mx-4 mt-2">
                            <PageLink data={{name: "Data Explorer Home",
                                             route: "/",
                                             icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                                   </svg>}} />
                            <PageLink data={{name: "Explore Snapshots",
                                             route: "/snapshotList",
                                             icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                                   </svg>
                                           }} />
                            <PageLink data={{name: "Explore PVs",
                                             route: "/pvList",
                                             icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                   </svg>
                                           }} />
                            <PageLink data={{name: "Explore Annotations",
                                             route: "/annotationList",
                                             icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                   </svg>
                                           }} />
                        </div>
                    </div>
                </div>
                <div id="main-wrapper" className="w-full">
                    {/* <div id="main-header" className="flex items-end h-24">
                        <div id="main-header-content" className="flex ml-6 mb-6 w-11/12">
                            <div id="page-title" className="text-2xl font-semibold">
                                Snapshot List Fliter
                            </div>
                        </div>
                    </div> */}
                    <Outlet />
                </div>
            </div>
            {/* <nav className="pb-4 border-b">
                <ul>
                    <li>
                        <Link to="/">Data Explorer Home</Link>
                    </li>
                    <li>
                        <Link to="/snapshotList">Explore Snapshots</Link>
                    </li>
                    <li>
                        <Link to="/pvList">Explore PVs</Link>
                    </li>
                    <li>
                        <Link to="/annotationList">Explore Annotations</Link>
                    </li>
                </ul>
                <p><i>Datastore configuration: {datastoreConfig}</i></p>
            </nav> */}
        </>
    )
};

export default Layout;