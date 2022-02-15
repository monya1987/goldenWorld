import Menu from '../menu';
// import './App.css';
// import { Route, Link } from 'react-router-dom';

function HomePage({children}) {
    return (
        <>
            <div id="front-wrapper">
                <a href="index.html" id="logo">Ultima Online Golden World</a>
                <div id="front">
                    <div className="topline"><div id="shield"></div></div>
                    <div className="mask">
                        <div className="column">
                            <div className="search">
                                <form onSubmit="javascript: showBusyLayer()" method="post" action="">
                                  <input type="hidden" name="do" value="search" />
                                    <input type="hidden" name="subaction" value="search" />
                                      <div id="column-search">
                                        <input name="type" value="search" type="hidden" />
                                          <input id="column-search-input" name="story" value="Поиск"
                                                 onBlur="javascript: if(this.value == '') {this.value = 'Поиск';}"
                                                 onFocus="javascript: if(this.value == 'Поиск') {this.value = '';}" type="text" />
                                            <input value="" id="column-search-submit" type="submit" />
                                      </div>
                                </form>
                            </div>
                            <div className="box">
                                <div className="bhead"></div>
                                <div className="last_article">
                                    <p><b>Ultima status</b></p>
                                    <p><a href="statistikaigrokov.html">Все кто в игре</a></p>
                                </div>
                                <div className="bfoot"></div>
                            </div>
                            <Menu />
                        </div>
                        <div className="mainpart">
                            <div id="dle-info"></div>
                            <div id="dle-content">
                                <div id="noselect">
                                    <span className="news">
                                        <div className="box">
                                            <div className="bhead">&nbsp;</div>
                                            <div className="body">
                                                {children}
                                            </div>
                                            <div className="bfoot">&nbsp;</div>
                                            </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
