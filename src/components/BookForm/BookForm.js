import React from 'react';
import Header from '../Header/Header';
import './BookForm.css';
import '../Authentication/Authentication.scss';
const BookForm = () => {
    return (
        <div>

            <div className="container book-form border-0">
                <form className='form-class' >
                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="ID" name="ID" id='ID' required />
                        <label for="ID" class="form__label">ID</label>
                    </div>
                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="Title" name="Title" id='Title' required />
                        <label for="Title" class="form__label">Title</label>
                    </div>
                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="Author" name="Author" id='Author' required />
                        <label for="Author" class="form__label">Author</label>
                    </div>
                    
                    <div className="form__group field">
                        <h5 for="Genre" class="dumb-option custom-focus text-left">Genre</h5>
                        <select className='interesting-select form__field2' >
                            <option>Fiction</option>
                            <option>Travel</option>
                            <option>Horor</option>
                            <option>Biography</option>
                            <option>Adventure</option>
                            <option>Thriller</option>
                            <option>Romance</option>
                            <option>Science Fiction</option>
                            <option>Poem</option>
                            <option>Graphics Novel</option>
                            <option>Documentory</option>

                        </select>

                    </div>



                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="Language" name="Language" id='Language' required />
                        <label for="Language" class="form__label">Language</label>
                    </div>
                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="Publication" name="Publication" id='Publication' required />
                        <label for="Publication" class="form__label">Publication</label>
                    </div>


                    <div class="form__group field">
                        <h5 for="Purchase Date" class="dumb-option date-special custom-focus text-left">Purchase Date</h5>
                        <input type="date" className="form__field form__field2" placeholder="Purchase Date" name="Purchase Date" id='password' required />

                    </div>



                    <div className="form-group d-flex justify-content-start margin-top ">
                        <button type="submit" className="my-button">Add Book</button>
                    </div>



                </form>
            </div>

        </div>
    );
};

export default BookForm;