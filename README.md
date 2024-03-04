# Calender & What to do that day

### 달력을 만들고 달력 날짜마다 그날 할 일을 기록하는 서비스

##### 업데이트: 2024년 03월 04일 월요일

<br>
선택자를 사용해 DOM 요소를 검색하여 접근하는 방법을 많이 생각하며 구현했습니다.

- 요소들이 가까이 붙어있지 않은 경우에 상대적 위치를 이용하지 않고 접근하는 방법. (ID를 사용해 검색)
- 선택한 요소의 모든 자식 요소 모두 선택하고 싶을 때. (querySelectorAll)
  :hover,:active 같은 가상 클래스도 선택 가능하다.

함수를 만들어서 동적으로 태그를 생성하여 테이블을 구성해 보았습니다.

동적으로 태그를 생성하다 보니 추가적인 기능을 업데이트할 때 하나의 태그가 선택되면 이벤트를 발생시키고자 하는 부분에서 고민이 깊어졌습니다.

### 추가 업데이트 사항

윗글에서 말한 이벤트 발생 부분을 추가 업데이트 사항으로 선정했습니다.
해결된다면 서버에서 선택한 날짜에 데이터를 저장하는 기능까지 구현한다면 완벽할 것 같습니다.

- 날짜를 클릭하면 하얗게 원을 만들어 선택했다는 것을 알려주기
- 날짜를 선택하면 day todo list가 보이게 하기
- 다른 날짜를 선택하면 day todo list가 초기화 되게하기