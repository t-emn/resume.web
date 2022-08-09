import { aboutme } from '../data/text';
import Introduction from './aboutme/Introduction';
import ProfilePicture from './aboutme/ProfilePicture';
import SocialIcons from './aboutme/SocialIcons';
const AboutMe = () => {
  const title = aboutme.title.split('-');
  return (
    <div className="w-screen min-h-full flex flex-col items-center bg-slate-900 leading-normal p-8">
      <div className="w-full flex flex-col items-center space-y-16 max-w-7xl">
        <div className="w-full flex flex-col items-center">
          <h3 className="font-bold">
            <span className="text-red-700">{title[0]}</span>
            <span className="text-gray-700"> {title[1]}</span>
          </h3>
          <div className="font-gib text-3xl">{aboutme.subtitle}</div>
        </div>
        <div className="w-full flex flex-col px-16 items-center gap-8">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
            <ProfilePicture />
            <Introduction />
          </div>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
