import React, { useState } from 'react'
import { soraGet } from '../api/soraApi'

// Home.jsx 예시
function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // API 호출
    soraGet().then(res => setData(res));
  }, []);

  // 데이터가 없을 때 빈 화면을 반환하거나 로딩바를 보여주세요.
  if (!data) return <div>로딩 중...</div>;

  return (
    <div>
      {/* 데이터가 있을 때만 렌더링 */}
      <h1>{data.message}</h1>
    </div>
  );
}

export default Home