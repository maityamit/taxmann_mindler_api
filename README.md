## Endpoints

### 1. /isLCExist

- **Method**: POST
- **Description**: Checks if a user exists on LeetCode and returns their information if found.
- **Request Body**:
  - `userName` (string): Username of the LeetCode user to check.
- **Response Body**:
  - `userName` (string): Username of the user.
  - `isValid` (boolean): Indicates if the user exists (true) or not (false).
  - `rating` (integer): User's LeetCode rating.
  - `topPercentage` (string): User's LeetCode top percentage.
  - `attendedContestsCount` (string): Number of contests the user has attended on LeetCode.
  - `globalRanking` (string): User's global ranking on LeetCode.

### 2. /isCFExist

- **Method**: POST
- **Description**: Checks if a user exists on Codeforces and returns their information if found.
- **Request Body**:
  - `userName` (string): Username of the Codeforces user to check.
- **Response Body**:
  - `userName` (string): Username of the user.
  - `isValid` (boolean): Indicates if the user exists (true) or not (false).
  - `rating` (integer): User's Codeforces rating.

### 3. /isCCExist

- **Method**: POST
- **Description**: Checks if a user exists on CodeChef and returns their information if found.
- **Request Body**:
  - `userName` (string): Username of the CodeChef user to check.
- **Response Body**:
  - `userName` (string): Username of the user.
  - `isValid` (boolean): Indicates if the user exists (true) or not (false).
  - `rating` (integer): User's CodeChef rating.

### 4. /lcLeader

- **Method**: POST
- **Description**: Returns the leaderboard of LeetCode users based on provided usernames.
- **Request Body**:
  - `userNames` (string): A semicolon-separated list of LeetCode usernames.
- **Response Body**:
  - Array of objects containing the following fields:
    - `Name` (string): Username of the user.
    - `rating` (integer): User's LeetCode rating.
    - `titlePhoto` (string): URL of the user's title photo.
    - `handle` (string): User's handle.
    - `maxRating` (null): Maximum rating (not available for LeetCode).
    - `rank` (float): User's ranking on LeetCode.

### 5. /cfLeader

- **Method**: POST
- **Description**: Returns the leaderboard of Codeforces users based on provided usernames.
- **Request Body**:
  - `userNames` (string): A semicolon-separated list of Codeforces usernames.
- **Response Body**:
  - Array of objects containing the following fields:
    - `Name` (string): Full name or handle of the user.
    - `rating` (integer): User's Codeforces rating.
    - `titlePhoto` (string): URL of the user's title photo.
    - `handle` (string): User's handle.
    - `maxRating` (integer): User's maximum Codeforces rating.
    - `rank` (integer): User's rank on Codeforces.

### 6. /lcCompare

- **Method**: POST
- **Description**: Compares LeetCode user information for multiple users.
- **Request Body**:
  - `userNames` (string): A semicolon-separated list of LeetCode usernames.
- **Response Body**:
  - Array of objects containing the following fields:
    - `Name` (string): Username of the user.
    - `attendedContestsCount` (integer): Number of contests attended.
    - `rating` (integer): User's LeetCode rating.
    - `globalRanking` (integer): User's global ranking on LeetCode.
    - `topPercentage` (float): User's top percentage on LeetCode.

### 7. /cfCompare

- **Method**: POST
- **Description**: Compares Codeforces user information for multiple users.
- **Request Body**:
  - `userNames` (string): A semicolon-separated list of Codeforces usernames.
- **Response Body**:
  - Array of objects containing the following fields:
    - `Name` (string): Username of the user.
    - `rating` (integer): User's Codeforces rating.
    - `titlePhoto` (string): URL of the user's title photo.
    - `handle` (string): User's handle.
    - `maxRating` (integer): User's maximum Codeforces rating.
    - `rank` (integer): User's rank on Codeforces.
