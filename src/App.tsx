import { useState, useEffect } from 'react';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { User } from './interfaces/race';
import { mockupUsers } from './mockups/users';
import { UserCard } from './Components/UserCard/UserCard';



function App() {
    const [_, setIsLoading] = useState(true);
    const [users, setUsers] = useState < User[] > ([]);
    const [hasMore, setHasMore] = useState(true);
    const [activeUser, setActiveUser] = useState<number | null>(null)
    useEffect(() => {
        // Имитация загрузки данных
        setTimeout(() => {
            setUsers(mockupUsers.slice(0, 50));
            setIsLoading(false);
        }, 1500);
    }, []);

    const fetchMoreData = () => {
        // Имитация подгрузки данных
        setTimeout(() => {
            const startIndex = users.length;
            const endIndex = startIndex + 50;
            const newUsers = mockupUsers.slice(startIndex, endIndex);

            if (newUsers.length === 0) {
                setHasMore(false);
                return;
            }

            setUsers([...users, ...newUsers]);
        }, 1500);
    };
    return (
        <div className="App">
            <header className="App-header">
                <h1>Рейтинг игроков "Гоночки"</h1>
            </header>
            <main className="App-main">
                <InfiniteScroll 
                    dataLength={users.length} 
                    next={fetchMoreData} 
                    hasMore={hasMore} 
                    loader={
                        <div
                            className="loader">
                        </div>
                    }
                    endMessage={<p>No more users</p>}
                >
                    {
                        users.map((user, index)=>{
                            return (
                                <UserCard
                                    active={activeUser===index}
                                    name={user.name}
                                    speed={user.speed}
                                    time={user.time}
                                    number={index+1}
                                    onClick={()=>setActiveUser(index)}
                                />
                            )
                        })
                    }
                </InfiniteScroll>
            </main>
        </div>
    );
}

export default App;