import ContentLoader from 'react-content-loader';

const PizzaLoading = () => {
  return (
    <ContentLoader
      className="pizza-block"
      style={{ marginRight: '35px' }}
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="143" cy="121" r="118" />
      <rect x="0" y="261" rx="6" ry="6" width="280" height="24" />
      <rect x="0" y="308" rx="10" ry="10" width="280" height="84" />
      <rect x="1" y="417" rx="0" ry="0" width="90" height="30" />
      <rect x="125" y="410" rx="23" ry="23" width="151" height="47" />
    </ContentLoader>
  );
};

export default PizzaLoading;
