import React, { useState } from 'react';
import Shuffle from './Shuffle';

const Profile = () => {
  const [displayOthers, setDisplayOthers] = useState(false);

  const getAge = () => {
    const birthDate = new Date(1999, 11, 16);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // 誕生日がまだ来ていなければ年齢を1歳減らす
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    return age;
  };

  return (
    <div className="content-wrapper">
      <div className="content">
        <Shuffle className={'head css-selector'} text={'profile'} />
        <Shuffle className={'head'} text={'-------'} />
        <Shuffle className={'prof-item'} text={'# name'} />
        <Shuffle text={'-> Syuto Yoshida || ic__e'} />
        <Shuffle className={'prof-item'} text={'# age'} />
        <Shuffle text={'-> ' + getAge() + ' (1999th)'} />
        <Shuffle className={'prof-item'} text={'# computer skill'} />
        <Shuffle text={'-> front-end'} />
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Shuffle
          text={'(React, Next.js, TypeScript, jQuery, Tailwind CSS)'}
          newLine={false}
        />
        <Shuffle text={'-> back-end'} />
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Shuffle text={'(java, Go, PHP'} newLine={false} />
        <Shuffle text={'-> infrastructure'} />
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Shuffle text={'(GraphQL, MySQL, Docker'} newLine={false} />
        <Shuffle text={'-> MATLAB'} />
        <Shuffle text={'-> PureData'} />
        <Shuffle className={'prof-item'} text={'# my research'} />
        <Shuffle text={'-> Development of a psychoacoustic roughness'} />
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Shuffle
          text={'prediction model using machine learning'}
          newLine={false}
        />
        <Shuffle className={'prof-item'} text={'# interest'} />
        <Shuffle text={'-> music'} />
        <Shuffle text={'-> movie'} />
        <Shuffle text={'-> clothes'} />
        <Shuffle text={'-> technology'} />
        <Shuffle text={'-> spiritual'} />
        <button
          className="others-button"
          onClick={() => setDisplayOthers(!displayOthers)}
        >
          <Shuffle className={'prof-item'} text={'# others '} />
        </button>
        <span>&nbsp;&nbsp;&lt;</span>
        <Shuffle text={'- click to get more info'} newLine={false} />
        <div className={displayOthers ? '' : 'others-none'}>
          <Shuffle className={'sub-prof-item'} text={'## my loving music'} />
          <Shuffle text={'-> A Day in the Life / The Beatles'} />
          <Shuffle className={'sub-prof-item'} text={'## my loving movies'} />
          <Shuffle text={'-> Eyes Wide Shut / Stanley Kubrick'} />
          <Shuffle text={'-> Sonatine / Takeshi Kitano'} />
          <Shuffle className={'sub-prof-item'} text={'## current Dream'} />
          <Shuffle text={'-> to be free'} />
          <Shuffle className={'sub-prof-item'} text={'## motto'} />
          <Shuffle text={'-> love and creation'} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
