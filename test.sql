-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2023 年 12 月 30 日 12:47
-- 伺服器版本： 10.4.28-MariaDB
-- PHP 版本： 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `test`
--

-- --------------------------------------------------------

--
-- 資料表結構 `ac`
--

CREATE TABLE `ac` (
  `id` int(4) UNSIGNED ZEROFILL NOT NULL,
  `name` text NOT NULL,
  `account` text NOT NULL,
  `password` text NOT NULL,
  `permissions` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `ac`
--

INSERT INTO `ac` (`id`, `name`, `account`, `password`, `permissions`) VALUES
(0000, '南宮柳信', 'admin', '1234', '超級管理者'),
(0002, '南宮小帳', 'human', 'a8787', '管理者'),
(0005, '小白白', 'SmallWhite', 'sw', '使用者');

-- --------------------------------------------------------

--
-- 資料表結構 `re`
--

CREATE TABLE `re` (
  `id` int(5) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `account` text NOT NULL,
  `state` text NOT NULL,
  `result` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `re`
--

INSERT INTO `re` (`id`, `time`, `account`, `state`, `result`) VALUES
(1, '2023-12-30 10:51:57', 'admin', '登入', '成功'),
(2, '2023-12-30 10:52:00', 'admin', '登出', '成功'),
(3, '2023-12-30 10:52:27', 'human', '登入', '成功'),
(4, '2023-12-30 10:52:31', 'human', '登出', '成功'),
(5, '2023-12-30 10:52:43', 'SmallWhite', '登入', '成功'),
(6, '2023-12-30 10:52:48', 'SmallWhite', '登出', '成功');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `ac`
--
ALTER TABLE `ac`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `re`
--
ALTER TABLE `re`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `ac`
--
ALTER TABLE `ac`
  MODIFY `id` int(4) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `re`
--
ALTER TABLE `re`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
