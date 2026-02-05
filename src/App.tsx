import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import EditorPage from "./pages/EditorPage";
import ProfilePage from "./pages/ProfilePage";
import SubscribePage from "./pages/SubscribePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SearchPage from "./pages/SearchPage";
import AuthPage from "./pages/AuthPage";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/subscribe/:authorHandle" element={<SubscribePage />} />
        <Route path="/@:authorHandle/:postSlug" element={<PostPage />} />
        <Route path="/@:authorHandle" element={<ProfilePage />} />
      </Routes>
    </AppLayout>
  );
}
