
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Header from 'components/Header';
import injectSheet from 'react-jss';

import classes from './classes';

@inject('controller')
@observer
class Donwloader extends Component {
    render() {
        var { container: { playlist } } = this.props;

        return (
            <div className={classes.container}>
                <Header {...{
                    showBack: true,
                    transparent: true,
                }} />

                <section>
                    <nav>
                        <div>
                            <i className="ion-ios-search-strong" />

                            <input
                                type="text"
                                placeholder="Search ..."
                            />
                        </div>

                        <ul>
                            <li>
                                All

                                <span className={classes.count}>
                                    {playlist.songs.length}
                                </span>
                            </li>

                            <li>
                                In progress

                                <span className={classes.count}>
                                    {playlist.songs.length}
                                </span>
                            </li>

                            <li>
                                Done

                                <span className={classes.count}>
                                    {playlist.songs.length}
                                </span>
                            </li>
                        </ul>
                    </nav>

                    <aside>
            
                    </aside>
                </section>

                <footer>
                    <button
                        onClick={
                            e => {
                                // TODO:
                            }
                        }
                    >
                        <i className="ion-android-open" />
                        Open Folder
                    </button>

                    <button
                        onClick={
                            e => {
                                // TODO:
                            }
                        }
                    >
                        <i className="ion-ios-close" />
                        Clear All
                    </button>
                </footer>
            </div>
        );
    }
}

export default injectSheet(classes)(Donwloader);
