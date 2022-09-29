import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { AiFillInstagram, AiFillGithub } from "react-icons/ai"

const Menu = () => {
  const elm = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [nowPage, setNowPage] = useState("/")
  const [width, setWidth] = useState(500)

  useEffect(() => {
    const onResize = () => {
      console.log("aa")
      if (elm.current) {
        const clientWidth = elm?.current.clientWidth;
        setWidth(clientWidth)
      }
    }
    window.addEventListener('resize', onResize);
  }, [elm]);

  const itemInfo = [
    { link: "/", name: "HOME" },
    { link: "/profile", name: "PROFILE"},
    { link: "/blog", name: "BLOG"},
    { link: "/products", name: "PRODUCTS"},
    { link: "/hit", name: "HIT ME"}
  ]

  const items = itemInfo.map((item: any) => {
    return (
      <li>
        <Link 
          to={ item.link }
          onClick={ () => {setNowPage(item.link)} }
        >
          <motion.div
            id={ nowPage ===  item.link ? "active" : ""}
            whileHover={{ scale: [null, 1.5, 1.3, 1.5, 1.3, 1.5, 1.3, 1.5, 1.3] }}
            transition={{ duration: 0.3 }}
          >
            { item.name }
          </motion.div>
        </Link>
      </li>
    )
  })

  const Open = ({ ...props }) => (
    <svg { ...props } width="17" height="15" viewBox="0 0 17 15" fill="none">
      <path
        d="M17 0H0v1.4h17V0zm0 6.8H0v1.4h17V6.8zm0 6.8H0V15h17v-1.4z"
        fill="currentColor"
      />
    </svg>
  )
  
  const Close = ({ ...props }) => (
    <svg { ...props } width="17" height="17" viewBox="0 0 17 17" fill="none">
      <path
        d="M17 1l-1-1-7.5 7.5L1 0 0 1l7.5 7.5L0 16l1 1 7.5-7.5L16 17l1-1-7.5-7.5L17 1z"
        fill="currentColor"
      />
    </svg>
  )

  return (
    <div>
      <button
        className="hamburger-menu"
        aria-label="Close menu"
        aria-expanded={ menuOpen }
        onClick={ () => setMenuOpen(!menuOpen) }
      >
        {menuOpen ? (
          <div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              transition={{ type: "tween", duration: 0.15 }}
            >
            <Close className="w-10 h-10" />
            </motion.div>
          </div>
        ) : (
          <div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ type: "tween", duration: 0.15 }}
            >
              <Open className="w-10 h-10" />
            </motion.div>
          </div>
        )}
      </button>
      <motion.div
        ref={ elm }
        className="menu-wrap"
        initial={{ x: width }}
        animate={{ x: menuOpen ? 0 : width }}
        transition={{ type: "tween", duration: 0.15 }}
      >
        <nav>
          <ul>
            { items }
            <li>
              <a target="_blank" href="https://www.instagram.com/ccco___e/" rel="noreferrer">
                <AiFillInstagram size={ 30 } />
              </a>
              <a target="_blank" href="https://github.com/eyescreamm" rel="noreferrer">
                <AiFillGithub size={ 30 } />
                </a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </div>
  )
}

export default Menu