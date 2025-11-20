# **Book Tracker Component Structure**

- **AppLayout** (Wraps everything -> Header -> BodyBoard -> Footer)

  - **Header**

  - **BodyBoard** (Renders the 3 main columns)

    - **Column** (Container for each column -> 1 / 2 / 3)

      - **ColumnHeader**
        - **StatusBadge** (Backlog / In Progress / Finished)
        - **AddBookButton**
        - **AddBookComposer**

      - **ColumnBody** (Holds the list of books)
        - **BookList** (Wrapper for book cards)
        - **BookCard** (Displays individual book)

  - **Footer**
