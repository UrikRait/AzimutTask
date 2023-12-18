
export function Panel() {
  return (
    <>
        <div className="panel">
            <div className="panel__flex">
                <div className="panel__items">
                    <button className="panel__button">
                    <svg className="panel__ico" xmlns="http://www.w3.org/2000/svg" version="1.1" width="26" height="26" x="0" y="0" viewBox="0 0 32 32"><g><path d="M31 8.413A3.417 3.417 0 0 0 27.587 5H4.413A3.417 3.417 0 0 0 1 8.413v15.174A3.417 3.417 0 0 0 4.413 27h23.174A3.417 3.417 0 0 0 31 23.587V8.413zM4.413 7h23.174C28.367 7 29 7.634 29 8.413v2.928l-9.806 4.203a8.15 8.15 0 0 1-6.387 0L3 11.34V8.413C3 7.633 3.634 7 4.413 7zm23.174 18H4.413C3.633 25 3 24.366 3 23.587v-10.07l9.019 3.864c.788.337 2.184.814 3.981.814 1.797 0 3.193-.477 3.981-.814L29 13.516v10.07c0 .78-.634 1.414-1.413 1.414z" fill="#0077ff" opacity="1" data-original="#000000"></path></g></svg>
                    </button>
                </div>
                <div className="panel__items">
                    <button className="panel__button">
                        <img src="img/calendar_outline_28.svg" alt="" className="panel__ico" />
                    </button>
                </div>
                <div className="panel__items">
                    <button className="panel__button">
                        <img src="img/users_outline_28.svg" alt="" className="panel__ico" />
                    </button>
                </div>
                <div className="panel__items">
                    <button className="panel__button">
                        <img src="img/more_horizontal_28.svg" alt="" className="panel__ico" />
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
