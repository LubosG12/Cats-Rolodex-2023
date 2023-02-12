const Card = ({name, email, id }) => (
    <div key={id} className='card-container'>
    <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`}/>
    <h2>{name}</h2>
    <p>{email}</p>
</div>
)

// class Card extends Component {
//     render () {

//         const { name, email, id } = this.props;

//         return(
//             <div key={id} className='card-container'>
//                             <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`}/>
//                             <h2>{name}</h2>
//                             <p>{email}</p>
//                         </div>
//         )
//     }

// }

export default Card;