const Image = (props) => {
    return (
        <div>
            <img
                src= {props.image.urls.regular}
                alt= {props.image.alt_description}
            />
            <button>Accept</button>
        </div>
        )
    }
export default Image;