import Spline from '@splinetool/react-spline';


export default function App() {

  const loc = "./../assets/3Dassets/spls.splinecode";
  const mlink = "https://drive.google.com/file/d/1aM_dTwZs9RENGaEaZEG2tOEYiYiTQqJR/view?usp=drive_link";
  const flink ="https://prod.spline.design/dpTC477hE8QyTukQ/scene.splinecode";


  return (
    <Spline scene= {flink} />
  );
}
