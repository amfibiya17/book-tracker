🔄 ✅ ❌ ⚠️ 🚫 🚧

### Mini tickets:

- ✅ Set up Git -> init repo, first commit
- ✅ Install Tailwind v3 -> tailwindcss, postcss, autoprefixer
- ✅ Make Tailwind work -> added config, verified with blue banner
- ✅ Change favicon -> replaced public/favicon.svg, cleared cache
- ✅ Enable jsx-a11y rules in ESLint -> flat config setup for accessibility linting
- ✅ Add EditorConfig -> consistent indentation and line endings across editors
- ✅ Add Prettier configuration -> auto-formatting and code style consistency
- ✅ Create [basic app structure](./ComponentStructure.md) -> set up initial files and folders
- ✅ Build app skeleton -> responsive layout (borders only)
- ✅ Add column config -> columns setup with keys & labels
- ✅ Set up new AddBookComposer component -> wired it up to ColumnBody
- ✅ Implement book state management -> add manual books to columns + render in BookList
- ✅ Persist board state -> save columns to localStorage and restore on refresh (5 min expiry)
- ✅ Set up Google Books API call -> fetch basic book data for a query
- ✅ Wire composer input to API -> typing shows a live results list under the input (placeholder UI)
- ✅ Allow selecting a result -> clicking a result adds that book as a BookCard to the current column
- ✅ Prevent duplicates -> avoid adding the same Google book twice across any column
- ✅ Show duplicate warning -> display “Book already on board” when user selects an already-added Google result
- ✅ Fix layout -> prevent board from shifting when search results add vertical scrollbar
- ✅ Unify search card styles -> make Google search results visually match BookCard size + layout
- ✅ Refactor BookCard and AddBookComposer -> clean up components, reduce duplication, improve maintainability
- ✅ Fix manual input issue -> enforce max input length of 40 characters
- ✅ Improve title/author rendering -> add word truncation + line clamp
- ✅ Fix manual adding books -> prevent adding the same title manually multiple times

- [ ] Drag & drop (Phase 1) -> reorder BookCards within the same column
- [ ] Drag & drop (Phase 2) -> move BookCards between columns (Backlog -> In Progress -> Finished)
- [ ] Drag & drop persistence -> updated board order saved to localStorage

- [ ] Improve search behavior -> make Google Books results more reliable
- [ ] Improve BookCard delete button -> clearer icon + consistent styling
- [ ] Limit long titles -> apply 2-line clamp for consistent card height

- [ ] Edit book title -> allow updating title directly on the BookCard or in a small modal
- [ ] OR: Build edit modal -> open a modal to update all fields for manually-added books

- [ ] Header functionality -> display app title and global actions
- [ ] Footer functionality -> display helper text and secondary actions

- [ ] Export/import board -> save entire reading board as JSON, restore later
- [ ] Clear board action -> reset all columns with one confirmation click
- [ ] Optional backend sync -> connect to a real database and save the board state there

- [ ] AI suggestions -> generate recommendations - AI Agent?
- [ ] Auto-add AI Agent picks -> button to add recommended books directly to a Backlog

- [ ] User authentication -> allow sign up, login/logout, and store user profile

- [ ] UI design -> apply consistent styling
