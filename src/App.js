import Customer from './components/Customer';
import './App.css';
import {Component} from "react";

const customers = [
    {
        id: 1,
        image: "https://placeimg.com/64/64/1",
        name: '홍길동',
        birthday: '9801122',
        gender: '남자',
        job: '대학생'
    },
    {
        id: 2,
        image: "https://placeimg.com/64/64/2",
        name: '이순신',
        birthday: '9891122',
        gender: '남자',
        job: '대학생'
    },
    {
        id: 3,
        image: "https://placeimg.com/64/64/3",
        name: '세종대왕',
        birthday: '9401122',
        gender: '남자',
        job: 'King'
    },
    {
        id: 4,
        image: "https://placeimg.com/64/64/4",
        name: '홍길도',
        birthday: '9501122',
        gender: '남자',
        job: '프로그래머'
    }
]

// map 사용 시 key props 필요
class App extends Component {
    render() {
        return (
            <div>
                { customers.map(c => { return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> )})}
            </div>
        )
    }
}

export default App;
