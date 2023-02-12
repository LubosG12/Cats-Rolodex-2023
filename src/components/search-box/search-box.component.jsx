import './search-box.styles.css';

const SearchBox = ({ onSearchHandler, placeholder, className }) => (
           <input 
           className={`search-box ${className}`}
           type='search' 
           placeholder={placeholder}
           onChange={onSearchHandler}/>
)

// class SearchBox extends Component {
    
//     render() {

//         const { onSearchHandler, placeholder, className } = this.props;

//         return(
//            <input 
//            className={`search-box ${className}`}
//            type='search' 
//            placeholder={placeholder}
//            onChange={onSearchHandler}/>
//         )
//         }
// }

export default SearchBox;