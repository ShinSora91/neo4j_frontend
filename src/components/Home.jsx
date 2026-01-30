import { useEffect, useState } from "react";
import { soraGet } from "../api/soraApi";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    soraGet().then((res) => {
      setData(res); // API 응답 데이터를 상태에 저장
    }).catch(err => {
      console.error("데이터 로드 실패:", err);
    });
  }, []);

  if (!data) return <div>로딩 중이거나 백엔드가 꺼져있습니다...</div>;

  return (
    <div>
      <h1>백엔드 메시지: {data.message}</h1>
    </div>
  );
}

export default Home;