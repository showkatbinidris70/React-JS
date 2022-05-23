const title = "Title";
const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
const date= new Date();
const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();

function CardComponent(props){
 const {titleText,descText} = props;
  return <div className='card'>
          <h3 className='title'>{titleText}</h3>
          <p className='description'>{descText} </p>
          <p className='date'>{day+"/"+month+"/"+year}</p>
        </div>
}
export default CardComponent;