import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Info = {
  link: string;
  name: string;
  nowPage: string;
};

const Items = ({ link, name, nowPage }: Info) => {
  return (
    <Link to={link}>
      <motion.div
        id={nowPage === link ? 'active' : ''}
        whileHover={{
          scale: [null, 1.5, 1.35, 1.5, 1.35, 1.5, 1.35, 1.5, 1.35, 1.5, 1.3],
        }}
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.div>
    </Link>
  );
};

export default Items;
