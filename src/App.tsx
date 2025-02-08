import { useThemeStore } from '~/model/themeSlice/themeSlice';
import { useToggleThemeBackground } from '~/hooks/useToggleThemeBackground';

import { Header } from './components/Header/Header';

import './App.scss';

function App() {
    const { theme, toggleTheme } = useThemeStore();
    useToggleThemeBackground();

    return (
        <div className="g-root">
            <Header theme={theme} onToggleTheme={toggleTheme} />
        </div>
    );
}

export default App;
