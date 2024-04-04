import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='space-y-2 mt-4 text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p >Journalism Without Fear or Favour</p>
            <p className='font-semibold text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;