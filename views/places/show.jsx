const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return(
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! (>_<)' : 'Rave! (>u<)'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>-{c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={data.place.pic} alt={data.place.name}/>
                <h3>
                    Located in {data.place.city}, {data.place.state}
                </h3>
                <h2>Rating</h2>
                <p className="text-center">Not Rated</p>
                <h3>Description</h3>
                <h3>
                    {data.place.showEstablished()}
                    </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>

                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
                <div>

                <h2>Comments</h2>
                {comments}
                </div>
                <form method="POST" action={`/places/${data.place.id}/comment`}>
                    <div className='row'>
                        <div className="form-group col-sm-4">
                            <label htmlFor="author">Author</label>
                            <input className="form-control"
                            id="author"
                            name="author"
                            required/>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="stars">Star Rating</label>
                            <select className="form-control"
                            id="stars"
                            name="stars"
                            required>
                                <option value='5'>5</option>
                                <option value='4'>4</option>
                                <option value='3'>3</option>
                                <option value='2'>2</option>
                                <option value='1'>1</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="rant">Rant?</label>
                            <input className="form-control"
                            type="checkbox"
                            id="rant"
                            name="rant"/>
                        </div>
                        <div className="form-group col-sm-12">
                            <label htmlFor="content">Content</label>
                            <textArea
                            className='form-control'
                            id="content"
                            name="content"/>
                        </div>
                    </div>
                        <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form>
            </main>
        </Def>
    )
}

module.exports = show


