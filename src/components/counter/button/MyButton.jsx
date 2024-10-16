
const MyButton = ({type, handleFun}) => {

    return(

        <>
            <button onClick={handleFun} className="btn1">{type == 'dec' ? '-' : '+'}</button>
        </>

    )

}
export default MyButton;