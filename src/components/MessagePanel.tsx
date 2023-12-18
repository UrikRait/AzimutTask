export function MessagePanel() {
  return (
    <>
        <div className="messagePanel">
            <div className="messagePanel__flex">
                <div className="messagePanel__item">
                    <button className="messagePanel__button">
                        <img src="img/menu_outline_28.svg" alt="" className="messagePanel__ico" />
                    </button>
                </div>
                <div className="messagePanel__item newMessage">
                    <button className="messagePanel__button">
                        <img src="img/pencil_square_28.svg" alt="" className="messagePanel__ico panel__ico" />
                        <p className="messagePanel__text newMessage__text">Новое сообщение</p>
                    </button>
                </div>
                <div className="messagePanel__item">
                    <button className="messagePanel__button">
                        <img src="img/trash_outline_28.svg" alt="" className="messagePanel__ico panel__ico" />
                        <p className="messagePanel__text">Удалить</p>
                    </button>
                </div>
                <div className="messagePanel__item">
                    <button className="messagePanel__button">
                        <img src="img/archive_outline_28.svg" alt="" className="messagePanel__ico panel__ico" />
                        <p className="messagePanel__text">Архивировать</p>
                    </button>
                </div>
                <div className="messagePanel__item">
                    <button className="messagePanel__button">
                        <img src="img/check_shield_outline_56.svg" alt="" className="messagePanel__ico panel__ico" />
                        <p className="messagePanel__text">Отчет</p>
                    </button>
                </div>
                <div className="messagePanel__item">
                    <button className="messagePanel__button">
                        <img src="img/_outline_28.svg" alt="" className="messagePanel__ico" />
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
