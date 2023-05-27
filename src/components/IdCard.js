function IdCard(props) {
    // console.log(props)
const {lastName, firstName, gender, height, birth, picture} = props
const formattedBirth = birth.toLocaleDateString()
console.log(lastName)


    return(
        <div>
        
           <img src={picture} alt="profile" />
           <p>{lastName}</p>
           <p>{firstName}</p>
           <p>{gender}</p>
           <p>{height}</p>
           <p>{formattedBirth}</p>
           

        </div>
    )
}

export default IdCard