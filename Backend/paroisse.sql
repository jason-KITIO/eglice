-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.16:3306
-- Généré le : dim. 14 juil. 2024 à 21:10
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `paroisse`
--

-- --------------------------------------------------------

--
-- Structure de la table `email`
--

DROP TABLE IF EXISTS `email`;
CREATE TABLE IF NOT EXISTS `email` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `email`
--

INSERT INTO `email` (`id`, `email`, `created_at`) VALUES
(1, 'Ayanokuoji@gmail.com', '2024-07-14 21:10:01');

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `description` text NOT NULL,
  `image` longblob,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`id`, `title`, `date`, `description`, `image`, `created_at`) VALUES
(1, 'Messe de Noël', '2024-12-24', 'Célébration de la naissance de Jésus avec chants de Noël, crèche vivante et distribution de cadeaux aux enfants.', NULL, '2024-07-14 09:29:18'),
(2, 'Pèlerinage annuel', '2024-08-15', 'Marche spirituelle jusqu\'à l\'église pour honorer la Vierge Marie. Messe solennelle suivie d\'un pique-nique paroissial.', NULL, '2024-07-14 09:29:42'),
(3, 'Fête patronale', '2024-03-01', 'Temps de recueillement, de prière et de réflexion sur un thème donné. Animée par un prêtre ou un laïc engagé. Ouverte à tous les paroissiens.', NULL, '2024-07-14 09:31:04'),
(4, 'Fête des familles', '2024-05-15', 'Messe spéciale pour les familles avec bénédiction des parents et des enfants. Jeux, activités et goûter pour resserrer les liens entre les familles de la paroisse.', NULL, '2024-07-14 09:31:23'),
(5, 'Retraite spirituelle', '2024-03-05', 'Temps de recueillement, de prière et de réflexion sur un thème donné. Animée par un prêtre ou un laïc engagé. Ouverte à tous les paroissiens.', NULL, '2024-07-14 09:42:46'),
(6, 'Messe dominicale ', '2024-08-04', 'Le service religieux hebdomadaire principal, généralement le dimanche matin.', NULL, '2024-07-14 20:30:44'),
(7, 'Ouverture aux visiteurs', '2024-05-15', 'De nombreuses églises accueillent volontiers les visiteurs lors de leurs services dominicaux, offrant ainsi une opportunité pour ceux qui sont curieux d\'en apprendre davantage sur la foi', NULL, '2024-07-14 20:38:33');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
