import Header from '../Header';

export default function HeaderExample() {
  return <Header cartCount={3} onMenuClick={() => console.log('Menu clicked')} />;
}
