import image from './hello.jpg';

function Base(){
    return(
        <div>
            <h1>
                hello dude
                <img src={image} alt="hello!" />
            </h1>
        </div>
    );
}

export default Base;