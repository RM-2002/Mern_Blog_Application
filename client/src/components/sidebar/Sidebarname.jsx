import "./sidebar.css";
import pic from "../../assets/DP.JPG";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebarname() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={pic}
          alt=""
        />
         <p>
         Hello and welcome to my blog website! My name is Roudrini and I started this blog as a way to share my views and experiences in the world of freelance writing and to connect with other writers.
        </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitlee">CATEGORIES</span>
        <ul className="sidebarList">
        {cats.map((c) => (
            <Link key={c._id} to={`/?cat=${c.name}`} className="link">
            <li key={c._id} className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
         
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}
