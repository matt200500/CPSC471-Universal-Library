-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: universal library
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrator`
--

DROP TABLE IF EXISTS `administrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrator` (
  `Administrator_ID` int NOT NULL,
  `Email` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `Administrator_password` varchar(255) NOT NULL,
  PRIMARY KEY (`Administrator_ID`),
  UNIQUE KEY `Administrator_ID_UNIQUE` (`Administrator_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrator`
--

LOCK TABLES `administrator` WRITE;
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
INSERT INTO `administrator` VALUES (1,'poopyjohn@gmail.com','john','poopy','poop','Poop123'),(2,'admin2@gmail.com','ad','mi','n','Poop123'),(6,'exampleemail@gmail.com','genreric','dada','daad','Poop123');
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_uploadimage`
--

DROP TABLE IF EXISTS `api_uploadimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_uploadimage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `caption` varchar(200) NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_uploadimage`
--

LOCK TABLES `api_uploadimage` WRITE;
/*!40000 ALTER TABLE `api_uploadimage` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_uploadimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add room',7,'add_room'),(26,'Can change room',7,'change_room'),(27,'Can delete room',7,'delete_room'),(28,'Can view room',7,'view_room'),(29,'Can add poop',8,'add_poop'),(30,'Can change poop',8,'change_poop'),(31,'Can delete poop',8,'delete_poop'),(32,'Can view poop',8,'view_poop'),(33,'Can add user',9,'add_user'),(34,'Can change user',9,'change_user'),(35,'Can delete user',9,'delete_user'),(36,'Can view user',9,'view_user'),(37,'Can add admin',10,'add_admin'),(38,'Can change admin',10,'change_admin'),(39,'Can delete admin',10,'delete_admin'),(40,'Can view admin',10,'view_admin'),(41,'Can add administrator',11,'add_administrator'),(42,'Can change administrator',11,'change_administrator'),(43,'Can delete administrator',11,'delete_administrator'),(44,'Can view administrator',11,'view_administrator'),(45,'Can add book',12,'add_book'),(46,'Can change book',12,'change_book'),(47,'Can delete book',12,'delete_book'),(48,'Can view book',12,'view_book'),(49,'Can add book authors',13,'add_bookauthors'),(50,'Can change book authors',13,'change_bookauthors'),(51,'Can delete book authors',13,'delete_bookauthors'),(52,'Can view book authors',13,'view_bookauthors'),(53,'Can add event',14,'add_event'),(54,'Can change event',14,'change_event'),(55,'Can delete event',14,'delete_event'),(56,'Can view event',14,'view_event'),(57,'Can add facilities',15,'add_facilities'),(58,'Can change facilities',15,'change_facilities'),(59,'Can delete facilities',15,'delete_facilities'),(60,'Can view facilities',15,'view_facilities'),(61,'Can add phone',16,'add_phone'),(62,'Can change phone',16,'change_phone'),(63,'Can delete phone',16,'delete_phone'),(64,'Can view phone',16,'view_phone'),(65,'Can add seat book',17,'add_seatbook'),(66,'Can change seat book',17,'change_seatbook'),(67,'Can delete seat book',17,'delete_seatbook'),(68,'Can view seat book',17,'view_seatbook'),(69,'Can add lend',18,'add_lend'),(70,'Can change lend',18,'change_lend'),(71,'Can delete lend',18,'delete_lend'),(72,'Can view lend',18,'view_lend'),(73,'Can add event apply',19,'add_eventapply'),(74,'Can change event apply',19,'change_eventapply'),(75,'Can delete event apply',19,'delete_eventapply'),(76,'Can view event apply',19,'view_eventapply'),(77,'Can add book rent',20,'add_bookrent'),(78,'Can change book rent',20,'change_bookrent'),(79,'Can delete book rent',20,'delete_bookrent'),(80,'Can view book rent',20,'view_bookrent'),(81,'Can add studyroom book',21,'add_studyroombook'),(82,'Can change studyroom book',21,'change_studyroombook'),(83,'Can delete studyroom book',21,'delete_studyroombook'),(84,'Can view studyroom book',21,'view_studyroombook'),(85,'Can add seat',22,'add_seat'),(86,'Can change seat',22,'change_seat'),(87,'Can delete seat',22,'delete_seat'),(88,'Can view seat',22,'view_seat'),(89,'Can add study room',23,'add_studyroom'),(90,'Can change study room',23,'change_studyroom'),(91,'Can delete study room',23,'delete_studyroom'),(92,'Can view study room',23,'view_studyroom'),(93,'Can add event held',24,'add_eventheld'),(94,'Can change event held',24,'change_eventheld'),(95,'Can delete event held',24,'delete_eventheld'),(96,'Can view event held',24,'view_eventheld'),(97,'Can add floor',25,'add_floor'),(98,'Can change floor',25,'change_floor'),(99,'Can delete floor',25,'delete_floor'),(100,'Can view floor',25,'view_floor'),(101,'Can add shelf',26,'add_shelf'),(102,'Can change shelf',26,'change_shelf'),(103,'Can delete shelf',26,'delete_shelf'),(104,'Can view shelf',26,'view_shelf'),(105,'Can add event hall',27,'add_eventhall'),(106,'Can change event hall',27,'change_eventhall'),(107,'Can delete event hall',27,'delete_eventhall'),(108,'Can view event hall',27,'view_eventhall'),(109,'Can add penis',28,'add_penis'),(110,'Can change penis',28,'change_penis'),(111,'Can delete penis',28,'delete_penis'),(112,'Can view penis',28,'view_penis'),(113,'Can add upload image',29,'add_uploadimage'),(114,'Can change upload image',29,'change_uploadimage'),(115,'Can delete upload image',29,'delete_uploadimage'),(116,'Can view upload image',29,'view_uploadimage');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$720000$KjI8wSgowkZzcc7ssZL1td$TndcHEKiN3gdWfip7h/3tKTbr2nGqDVaeDDSWiepSBs=','2024-04-16 21:55:35.940616',1,'matteo','','','matteocusanelli@gmail.com',1,1,'2024-04-11 01:52:52.361286'),(2,'pbkdf2_sha256$720000$BsbF3SxZ1khncuKKzn1hCl$obXqyjRZYnvH0N1fO3Coych9QchaBNyzpDjh0aWV8Z8=',NULL,0,'Jefferson123','','','',0,1,'2024-04-11 01:55:25.194634');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `book_id` int NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Publisher` varchar(255) NOT NULL,
  `Catalog` varchar(255) NOT NULL,
  `Genre` varchar(255) NOT NULL,
  `Status` varchar(255) NOT NULL,
  `Shelf_No` int NOT NULL,
  PRIMARY KEY (`book_id`),
  UNIQUE KEY `book_id_UNIQUE` (`book_id`),
  KEY `Shelf_Number_Book_idx` (`Shelf_No`),
  CONSTRAINT `Shelf_Number_Book` FOREIGN KEY (`Shelf_No`) REFERENCES `shelf` (`Shelf_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'the life of matteo','matteo','matteo','Horror','Available',1),(2,'Jason\'s Adventure','jason','jason','Children','Taken',2),(3,'Baby','treehouse','kids','TextBooks','Taken',4),(4,'fantasy','adada','dwdwawa','Fantasy','Taken',2),(5,'1','1','1','TextBooks','Available',2);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_authors`
--

DROP TABLE IF EXISTS `book_authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_authors` (
  `Author` varchar(255) NOT NULL,
  `book_id` int NOT NULL,
  PRIMARY KEY (`Author`,`book_id`),
  UNIQUE KEY `Author_UNIQUE` (`Author`),
  UNIQUE KEY `Book_ID_UNIQUE` (`book_id`),
  CONSTRAINT `book_id` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_authors`
--

LOCK TABLES `book_authors` WRITE;
/*!40000 ALTER TABLE `book_authors` DISABLE KEYS */;
INSERT INTO `book_authors` VALUES ('Joe',1),('Jefferson',4),('Jimmy',5);
/*!40000 ALTER TABLE `book_authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_rent`
--

DROP TABLE IF EXISTS `book_rent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_rent` (
  `User_ID` int NOT NULL,
  `Book_ID` int NOT NULL,
  `Lending_Time` varchar(255) NOT NULL,
  PRIMARY KEY (`User_ID`,`Book_ID`),
  UNIQUE KEY `User_ID_UNIQUE` (`User_ID`),
  UNIQUE KEY `Book_rentcol_UNIQUE` (`Book_ID`),
  CONSTRAINT `Book_IDRent` FOREIGN KEY (`Book_ID`) REFERENCES `book` (`book_id`),
  CONSTRAINT `User_IDRent` FOREIGN KEY (`User_ID`) REFERENCES `user` (`User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_rent`
--

LOCK TABLES `book_rent` WRITE;
/*!40000 ALTER TABLE `book_rent` DISABLE KEYS */;
INSERT INTO `book_rent` VALUES (1,3,'1'),(2,2,'7'),(69,4,'4');
/*!40000 ALTER TABLE `book_rent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2024-04-11 01:55:25.738733','2','Jefferson123',1,'[{\"added\": {}}]',4,1),(2,'2024-04-11 05:26:59.248307','4','Floor object (4)',1,'[{\"added\": {}}]',25,1),(3,'2024-04-11 05:29:44.639296','1','Seat object (1)',1,'[{\"added\": {}}]',22,1),(4,'2024-04-11 05:30:06.517252','2','Seat object (2)',1,'[{\"added\": {}}]',22,1),(5,'2024-04-12 00:12:53.956514','2','2',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',22,1),(6,'2024-04-12 00:12:57.906919','1','1',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',22,1),(7,'2024-04-12 00:12:59.828608','2','2',2,'[]',22,1),(8,'2024-04-12 02:22:05.214192','2','2',2,'[]',25,1),(9,'2024-04-12 03:22:47.178038','3','3',2,'[{\"changed\": {\"fields\": [\"Floorno\", \"Seat num\"]}}]',22,1),(10,'2024-04-12 03:22:49.870753','3','3',2,'[]',22,1),(11,'2024-04-12 04:51:16.170293','4','4',1,'[{\"added\": {}}]',22,1),(12,'2024-04-12 04:55:24.337259','3','3',2,'[]',25,1),(13,'2024-04-12 04:55:40.005872','5','5',1,'[{\"added\": {}}]',25,1),(14,'2024-04-12 05:00:05.556906','7','7',1,'[{\"added\": {}}]',22,1),(15,'2024-04-12 05:48:58.550856','6','6',1,'[{\"added\": {}}]',22,1),(16,'2024-04-12 06:22:06.698579','22','22',1,'[{\"added\": {}}]',22,1),(17,'2024-04-12 06:22:14.268075','56','56',1,'[{\"added\": {}}]',22,1),(18,'2024-04-12 23:16:32.275455','56','56',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',22,1),(19,'2024-04-12 23:16:34.791883','56','56',2,'[]',22,1),(20,'2024-04-12 23:16:37.371285','22','22',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',22,1),(21,'2024-04-12 23:16:42.367774','7','7',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',22,1),(22,'2024-04-12 23:16:45.344082','7','7',2,'[]',22,1),(23,'2024-04-12 23:16:48.055909','6','6',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',22,1),(24,'2024-04-12 23:16:51.874231','4','4',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',22,1),(25,'2024-04-12 23:16:54.047109','4','4',2,'[]',22,1),(26,'2024-04-12 23:16:55.651136','4','4',2,'[]',22,1),(27,'2024-04-12 23:17:00.565942','3','3',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',22,1),(28,'2024-04-12 23:17:03.471857','2','2',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',22,1),(29,'2024-04-12 23:17:06.325093','1','1',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',22,1),(30,'2024-04-13 00:30:51.597898','3','3',2,'[{\"changed\": {\"fields\": [\"User password\"]}}]',9,1),(31,'2024-04-13 00:30:58.655167','2','2',2,'[{\"changed\": {\"fields\": [\"User password\"]}}]',9,1),(32,'2024-04-13 00:31:04.862024','1','1',2,'[{\"changed\": {\"fields\": [\"User password\"]}}]',9,1),(33,'2024-04-13 06:09:41.234752','3','StudyRoom object (3)',1,'[{\"added\": {}}]',23,1),(34,'2024-04-13 06:09:47.021032','3','StudyRoom object (3)',2,'[]',23,1),(35,'2024-04-13 06:10:02.898779','2','StudyRoom object (2)',1,'[{\"added\": {}}]',23,1),(36,'2024-04-13 06:13:03.827223','1','StudyRoom object (1)',1,'[{\"added\": {}}]',23,1),(37,'2024-04-13 07:21:49.571942','22','22',1,'[{\"added\": {}}]',23,1),(38,'2024-04-13 07:22:18.763559','7','7',1,'[{\"added\": {}}]',23,1),(39,'2024-04-13 11:11:52.943162','1','Administrator object (1)',1,'[{\"added\": {}}]',11,1),(40,'2024-04-13 12:52:30.041712','1','1',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',22,1),(41,'2024-04-13 13:39:04.037558','1','1',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',22,1),(42,'2024-04-13 13:41:56.071442','1','1',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',22,1),(43,'2024-04-13 13:43:33.634836','1','1',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',22,1),(44,'2024-04-13 13:44:29.241817','1','1',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',22,1),(45,'2024-04-13 13:45:49.656560','1','SeatBook object (1)',2,'[]',17,1),(46,'2024-04-13 13:51:16.297692','2','2',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',22,1),(47,'2024-04-13 13:51:20.498898','3','3',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',22,1),(48,'2024-04-13 13:51:23.405696','4','4',2,'[]',22,1),(49,'2024-04-13 13:51:24.997580','4','4',2,'[]',22,1),(50,'2024-04-13 13:51:28.131611','6','6',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',22,1),(51,'2024-04-13 13:51:30.321896','7','7',2,'[]',22,1),(52,'2024-04-13 13:51:32.414760','7','7',2,'[]',22,1),(53,'2024-04-13 13:51:34.184865','22','22',2,'[]',22,1),(54,'2024-04-13 13:51:35.710712','56','56',2,'[]',22,1),(55,'2024-04-13 14:19:26.077604','1','1',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(56,'2024-04-13 14:19:29.288261','3','3',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(57,'2024-04-13 14:19:32.558203','7','7',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(58,'2024-04-13 14:19:34.653031','12','12',2,'[]',23,1),(59,'2024-04-13 14:19:37.148982','22','22',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(60,'2024-04-13 14:25:59.486866','1','1',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(61,'2024-04-13 14:26:01.881731','3','3',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(62,'2024-04-13 14:26:04.355616','7','7',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(63,'2024-04-13 14:26:06.483272','12','12',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(64,'2024-04-13 14:26:09.115873','22','22',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(65,'2024-04-13 14:42:14.295039','1','1',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(66,'2024-04-13 14:42:16.490277','3','3',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(67,'2024-04-13 14:42:18.542004','7','7',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(68,'2024-04-13 14:42:20.812959','12','12',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(69,'2024-04-13 14:42:23.697540','22','22',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(70,'2024-04-13 14:48:26.269826','3','3',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(71,'2024-04-13 14:48:35.999539','1','1',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(72,'2024-04-13 14:48:38.537282','7','7',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(73,'2024-04-13 14:48:42.235518','7','7',2,'[]',23,1),(74,'2024-04-13 14:48:44.315659','12','12',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(75,'2024-04-13 14:48:46.507335','22','22',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(76,'2024-04-13 19:13:29.314048','1','Shelf object (1)',1,'[{\"added\": {}}]',26,1),(77,'2024-04-13 19:13:37.165540','2','Shelf object (2)',1,'[{\"added\": {}}]',26,1),(78,'2024-04-13 19:14:36.610554','1','Book object (1)',1,'[{\"added\": {}}]',12,1),(79,'2024-04-13 19:25:59.382299','5','5',1,'[{\"added\": {}}]',26,1),(80,'2024-04-13 19:26:17.139539','4','4',1,'[{\"added\": {}}]',26,1),(81,'2024-04-13 20:15:29.574946','2','Book object (2)',2,'[{\"changed\": {\"fields\": [\"Genre\"]}}]',12,1),(82,'2024-04-13 20:15:33.375810','1','Book object (1)',2,'[{\"changed\": {\"fields\": [\"Genre\"]}}]',12,1),(83,'2024-04-13 20:15:57.656516','2','Book object (2)',2,'[{\"changed\": {\"fields\": [\"Title\", \"Publisher\", \"Catalog\", \"Genre\"]}}]',12,1),(84,'2024-04-13 20:17:04.881554','3','Book object (3)',2,'[{\"changed\": {\"fields\": [\"Genre\"]}}]',12,1),(85,'2024-04-13 20:36:11.389708','1','Book object (1)',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',12,1),(86,'2024-04-13 20:43:21.418269','56','56',2,'[]',22,1),(87,'2024-04-13 20:43:23.176993','22','22',2,'[]',22,1),(88,'2024-04-13 20:43:24.996658','8','8',2,'[]',22,1),(89,'2024-04-13 20:43:26.459765','7','7',2,'[]',22,1),(90,'2024-04-13 20:43:28.225194','6','6',2,'[]',22,1),(91,'2024-04-13 20:43:29.476433','4','4',2,'[]',22,1),(92,'2024-04-13 20:43:30.854769','3','3',2,'[]',22,1),(93,'2024-04-13 20:43:49.660780','2','2',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',22,1),(94,'2024-04-13 20:56:46.471147','2','2',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(95,'2024-04-13 20:56:48.535509','1','1',2,'[]',23,1),(96,'2024-04-13 20:56:51.909577','7','7',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(97,'2024-04-13 20:56:54.013344','12','12',2,'[]',23,1),(98,'2024-04-13 20:56:56.774338','22','22',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(99,'2024-04-13 21:06:46.955634','2','2',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(100,'2024-04-13 21:06:49.266761','3','3',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(101,'2024-04-13 21:06:52.040718','7','7',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(102,'2024-04-13 21:06:54.949663','7','7',2,'[]',23,1),(103,'2024-04-13 21:06:57.276810','8','8',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(104,'2024-04-13 21:06:59.153643','12','12',2,'[]',23,1),(105,'2024-04-13 21:07:02.314832','22','22',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(106,'2024-04-13 22:05:37.206785','3','Book object (3)',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',12,1),(107,'2024-04-13 22:05:41.918051','1','BookRent object (1)',2,'[]',20,1),(108,'2024-04-13 22:06:21.052570','3','3',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(109,'2024-04-13 22:07:10.241598','7','7',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(110,'2024-04-13 22:18:51.490637','2','Book object (2)',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',12,1),(111,'2024-04-13 22:27:44.904532','3','Book object (3)',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',12,1),(112,'2024-04-13 22:27:47.417874','4','Book object (4)',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',12,1),(113,'2024-04-13 22:27:49.590193','5','Book object (5)',2,'[]',12,1),(114,'2024-04-13 22:42:06.883881','7','7',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',23,1),(115,'2024-04-13 22:47:28.168938','1','Book object (1)',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',12,1),(116,'2024-04-13 22:47:31.451044','3','Book object (3)',2,'[{\"changed\": {\"fields\": [\"Status\"]}}]',12,1),(117,'2024-04-16 21:55:48.957734','Joe','BookAuthors object (Joe)',1,'[{\"added\": {}}]',13,1),(118,'2024-04-16 21:56:01.444836','Jefferson','BookAuthors object (Jefferson)',1,'[{\"added\": {}}]',13,1),(119,'2024-04-16 21:56:21.305816','Jimmy','BookAuthors object (Jimmy)',1,'[{\"added\": {}}]',13,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(10,'api','admin'),(11,'api','administrator'),(12,'api','book'),(13,'api','bookauthors'),(20,'api','bookrent'),(14,'api','event'),(19,'api','eventapply'),(27,'api','eventhall'),(24,'api','eventheld'),(15,'api','facilities'),(25,'api','floor'),(18,'api','lend'),(28,'api','penis'),(16,'api','phone'),(8,'api','poop'),(7,'api','room'),(22,'api','seat'),(17,'api','seatbook'),(26,'api','shelf'),(23,'api','studyroom'),(21,'api','studyroombook'),(29,'api','uploadimage'),(9,'api','user'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2024-03-29 04:27:16.194963'),(2,'auth','0001_initial','2024-03-29 04:27:16.784612'),(3,'admin','0001_initial','2024-03-29 04:27:17.007256'),(4,'admin','0002_logentry_remove_auto_add','2024-03-29 04:27:17.014416'),(5,'admin','0003_logentry_add_action_flag_choices','2024-03-29 04:27:17.021917'),(6,'api','0001_initial','2024-03-29 04:27:17.059621'),(7,'api','0002_alter_room_host','2024-03-29 04:27:17.064641'),(8,'api','0003_alter_room_host','2024-03-29 04:27:17.068172'),(9,'contenttypes','0002_remove_content_type_name','2024-03-29 04:27:17.179864'),(10,'auth','0002_alter_permission_name_max_length','2024-03-29 04:27:17.268991'),(11,'auth','0003_alter_user_email_max_length','2024-03-29 04:27:17.304091'),(12,'auth','0004_alter_user_username_opts','2024-03-29 04:27:17.313312'),(13,'auth','0005_alter_user_last_login_null','2024-03-29 04:27:17.415203'),(14,'auth','0006_require_contenttypes_0002','2024-03-29 04:27:17.419661'),(15,'auth','0007_alter_validators_add_error_messages','2024-03-29 04:27:17.431698'),(16,'auth','0008_alter_user_username_max_length','2024-03-29 04:27:17.528451'),(17,'auth','0009_alter_user_last_name_max_length','2024-03-29 04:27:17.621975'),(18,'auth','0010_alter_group_name_max_length','2024-03-29 04:27:17.653070'),(19,'auth','0011_update_proxy_permissions','2024-03-29 04:27:17.667073'),(20,'auth','0012_alter_user_first_name_max_length','2024-03-29 04:27:17.775932'),(21,'sessions','0001_initial','2024-03-29 04:27:17.831533'),(22,'api','0004_poop','2024-03-29 04:56:11.429707'),(23,'api','0005_delete_poop','2024-03-29 05:17:30.543142'),(24,'api','0006_user','2024-03-29 05:18:32.097148'),(25,'api','0007_admin','2024-03-29 05:18:32.123096'),(26,'api','0008_delete_admin_delete_user','2024-03-29 05:21:14.746952'),(27,'api','0009_admin_user','2024-03-29 05:21:22.397298'),(28,'api','0010_delete_admin_delete_user','2024-03-29 05:23:03.737614'),(29,'api','0011_admin_user','2024-03-29 05:23:16.929811'),(30,'api','0012_poop','2024-03-29 05:28:19.050038'),(31,'api','0013_remove_poop_id_alter_poop_code','2024-03-29 05:29:13.160886'),(32,'api','0014_delete_admin_delete_poop_delete_user','2024-03-29 05:31:53.039389'),(33,'api','0015_user','2024-03-29 05:48:30.367877'),(34,'api','0016_administrator_book_bookauthors_bookrent_event_and_more','2024-03-29 06:56:03.940731'),(35,'api','0002_administrator_book_bookauthors_user_event_floor_and_more','2024-03-31 00:55:56.333899'),(36,'api','0003_initial','2024-04-11 09:35:07.950458'),(37,'api','0004_administrator_book_bookauthors_user_event_floor_and_more','2024-04-11 09:38:11.933440'),(38,'api','0005_add_password_field','2024-04-11 09:43:53.535074'),(39,'api','0006_add_passwords','2024-04-11 09:51:48.164930'),(40,'api','0007_auto_20240411_0353','2024-04-11 09:54:02.813053'),(41,'api','0008_auto_20240411_0401','2024-04-11 10:05:11.614289'),(42,'api','0009_merge_0007_auto_20240411_0353_0008_auto_20240411_0401','2024-04-11 10:05:11.629427'),(43,'api','0010_auto_20240411_0406','2024-04-11 10:06:58.801775'),(44,'api','0011_auto_20240411_0414','2024-04-11 10:14:35.019484'),(45,'api','0012_room_penis_number','2024-04-11 10:14:46.280803'),(46,'api','0013_auto_20240411_2301','2024-04-12 05:06:45.213395'),(47,'api','0014_alter_user_options','2024-04-12 05:29:49.002119'),(48,'api','0015_alter_user_user_password','2024-04-12 05:33:23.165051'),(49,'api','0016_rename_user_password_user_user_password','2024-04-12 05:33:23.171482'),(50,'api','0017_alter_administrator_options','2024-04-12 05:36:12.307748'),(51,'api','0018_alter_seat_options_and_more','2024-04-12 05:47:13.901187'),(52,'api','0019_alter_seat_floorno_alter_seat_seat_num_and_more','2024-04-12 05:48:42.194207'),(53,'api','0020_alter_seatbook_options','2024-04-12 07:15:08.240203'),(54,'api','0021_seatbook_seat_num_alter_seatbook_unique_together','2024-04-12 07:18:55.216960'),(55,'api','0022_alter_seatbook_time','2024-04-12 08:04:07.186226'),(56,'api','0023_uploadimage_alter_seat_type','2024-04-12 23:15:10.952262'),(57,'api','0024_alter_studyroombook_options','2024-04-13 05:15:59.739067'),(58,'api','0024_alter_studyroom_options','2024-04-13 05:48:50.089369'),(59,'api','0024_auto_20240413_0013','2024-04-13 06:13:48.316931'),(60,'api','0025_alter_studyroom_options','2024-04-13 06:16:10.304662'),(61,'api','0026_rename_floor_no_studyroom_floorno_and_more','2024-04-13 06:16:32.130424'),(62,'api','0027_alter_studyroom_floorno_alter_studyroom_room_id','2024-04-13 07:10:32.247761'),(63,'api','0028_alter_studyroombook_options','2024-04-13 07:10:32.256370'),(64,'api','0027_alter_studyroom_floorno','2024-04-13 07:14:32.083577'),(65,'api','0028_rename_seat_num_seatbook_seat_number_and_more','2024-04-13 12:17:59.011406'),(66,'api','0029_alter_studyroombook_options','2024-04-13 13:59:37.532859'),(67,'api','0030_studyroombook_room_alter_studyroombook_time','2024-04-13 14:41:42.021744'),(68,'api','0031_rename_study_room_studyroombook_room','2024-04-13 14:41:42.028823'),(69,'api','0032_studyroombook_room','2024-04-13 15:28:12.108722'),(70,'api','0033_seatbook_seat_number','2024-04-13 18:37:52.016432'),(71,'api','0034_seatbook_seat_number','2024-04-13 18:38:25.929793'),(72,'api','0033_alter_seatbook_options_alter_shelf_options','2024-04-13 19:22:19.575486'),(73,'api','0033_alter_seatbook_options','2024-04-13 19:51:41.703377'),(74,'api','0034_alter_bookrent_options','2024-04-13 21:49:36.632734'),(75,'api','0035_remove_bookrent_lending_time_bookrent_book_and_more','2024-04-13 22:00:48.790471'),(76,'api','0036_remove_bookrent_lending_time_alter_bookrent_book','2024-04-13 22:02:41.272813'),(77,'api','0037_alter_bookrent_options','2024-04-13 22:03:11.361540'),(78,'api','0038_alter_bookrent_options_alter_seatbook_options','2024-04-13 22:07:57.526742');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('0v1japzrpzz6auwqswas6tlpulhwhld8','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvkQ9:0KDwsI-1revM4ybW96kp3rax4ySLSrnSoHWDhCGkN4w','2024-04-27 20:56:21.891191'),('2i1wc6kqw7afqwmahhasmmlsww19vj7j','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvX0e:tYT7P0r13jFKXKuxdb7svMSNth9fg0eAV7HR71QBumk','2024-04-27 06:37:08.147617'),('2mvr89f5dmvne712pn7x7wujq0cl218j','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvgws:ybYeATuiv6kJ-HFO3OE5Ove9fHIL6lvI3fd8tPQYuhs','2024-04-27 17:13:54.940475'),('4chols232h432f6f0afitj8jusyqnc3k','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rum0G:HwBeNssPNKkkRgOAZMsY7dX-ctA2T46hi-8u9C0vs64','2024-04-25 04:25:36.457980'),('5z1v4pftkrrykv32o4nrmk5r15a8gsmo','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvka7:3tZdhzJyBDUP01j523L1NieDKCe91RhY9UJNN6-ywek','2024-04-27 21:06:39.002636'),('69a81i6ki8ond3kbbojhcx9tmqm7rtxr','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvkMq:7DM1cHDdp3VqdOHr_2Vph0QMg7w75nA7PXQORL_Z7xY','2024-04-27 20:52:56.319346'),('6iwb59t9aeayf7yvkjldkwrylhxqubwx','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvbI9:MgOkBtYRTr88rLOvvmi3YNOB-8bOIJDd6nw314sif5o','2024-04-27 11:11:29.780455'),('7gzsg6uvbh68648a4pjag7119gpmdjlo','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rv9M1:rJdfEsD2QW3Mrq5tmvwhwYAtJegL1TImA6bi6ZMKMew','2024-04-26 05:21:37.816800'),('7rl5uxld9s614zle4ku0rkf6in4eix6c','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvkDR:DGlTeSapw8URbcXZLHR0IITLjOSWuUThhwraC7jKt5I','2024-04-27 20:43:13.931231'),('8el7c0gsv8n4zrrwx6if1r2zgxo5dk9n','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvk6H:3aVfgVnHtw5yaw9XAnb69ybi8eZFGuzE8MaAykM8jjM','2024-04-27 20:35:49.357704'),('8evl695a5kdozirfbkj1ydepsk4s5vug','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvW0w:_Wc6Z-62ox8ELZf7VIW4Qwlqb7kzbmwEeYzPFzypqXA','2024-04-27 05:33:22.517570'),('97pc2deevhph27kxfjdpa1ouiasw1uap','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvkfn:srtdpkYNGczXKBJkbh0Kvv6GcinEDHxPCe4LDy6dHJQ','2024-04-27 21:12:31.705185'),('9drdjrhlnhzbunu990sk2dkcy5n0gom1','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rwqm7:ZPNhf3kzo8rxO5egVyNW141Gh9vQ99yUf_XQUBImYX8','2024-04-30 21:55:35.945235'),('aida8bdrtxgbi70a7eupliwvkexkq3az','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvXfU:BIMzk3L6npDJzxlZPbzCGWKrNxgBTJ_Fq0fspO5stTM','2024-04-27 07:19:20.366669'),('ajr7t772mjqgl4n313zxj27235c65pzo','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvbs4:FZ140A90saTn8frwZodnBanzwIqWUKZL-eeHwK0vUP4','2024-04-27 11:48:36.211082'),('dp1gpiqophp520cvffl6o5v90wl8d1tu','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rv5iD:OYi1otLynf-htI9dKqkXt--a8tqNKk4InV83MFEm4-A','2024-04-26 01:28:17.252954'),('g48y2yi2qxdrovbpdgwic8rjqwmhfhr1','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rukLI:QdsHoJJbKhA7iJhyk_2_ZA8do24r40JhlZATewJPbnI','2024-04-25 02:39:12.849649'),('i7z5hbn68xf1b7itewscyf35et8yglge','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rv4Ws:PnadTXLWzg3_d17eZEbmqxR2t8XCiPWBIWFFyK5S2tQ','2024-04-26 00:12:30.597991'),('k9hx9255959d4cn6664vnft3qf0zb6f1','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvX1j:f1WdA5koX86emev0t4mJhM9x84ZUiGrkCR9PbU7_N9Y','2024-04-27 06:38:15.074249'),('kdx221f61bvf05vvkdtcwav43fw5mm72','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvlUy:Y946ce81ZNrRR2ZsgjukLJ7i7z_oiLRVl5aGGhm_PeY','2024-04-27 22:05:24.381955'),('kr6t14f6wa2gxk83m9pk5msak05sby4h','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvioK:Qioq9n06HMDUCHlwPLNK-tCYV8vFzoCpQL_vqn3QU8Q','2024-04-27 19:13:12.850849'),('ljj5268oiii61gotq2ynk91ulsx67kzb','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rujeF:2ygTS118XVWqWCy-lKhLCoBm1ly9kMp-WE58CRhGdVo','2024-04-25 01:54:43.184873'),('nj3w2gxjdhbinploi3q1g6gr2vbrt7p5','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvbs4:FZ140A90saTn8frwZodnBanzwIqWUKZL-eeHwK0vUP4','2024-04-27 11:48:36.608965'),('r82pzgomy68s07nswyb9kcwki6u0uw0y','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvjXs:8ZeqxxIrWT_21jXK_kwbOjBx0ETTqe3MM40DEiC-PUM','2024-04-27 20:00:16.608886'),('rxfvu39quq20yi8axeple64vaqy5fbo6','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rurLR:m-K0Hc6fDSL-A_z0JenLPM0qN5IcSv25qW1POqyWf-U','2024-04-25 10:07:49.392797'),('rycjtzdlitjwwq76haocyeoe9q6eciyo','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvR8S:klSDUSVJPRle25_PQP095xPo_P85DIKw2Nrlf-1BoJA','2024-04-27 00:20:48.114973'),('s3e4bw5w5gmggqj6r2c3ys23lt6npc49','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1ruqTB:h9zkL8KR0VfIY2tr-EyXs7KDlcVh8mtjCTrHinElpfg','2024-04-25 09:11:45.543474'),('ux7f9vyxhp5hkmhgkq1016vmxje8iwbf','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvcri:dBq_IB2RHUFamCsWlGzv2T42poJ13axQ8uaaWR4KDcY','2024-04-27 12:52:18.410809'),('vbcx3juoydj70w6751fhn65vdm1gh6e3','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvWnQ:aTaawL11ihXvO1NJ7-o10DLXMZnxvv83DtrSmRk0GfI','2024-04-27 06:23:28.000890'),('wo3mcofal6bsyspg7gw6gtxp75496rp7','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvgjJ:6nyqDok4MdKtJBpyP4Y__5fOh-D-XJdJJ2H3CLAwCDU','2024-04-27 16:59:53.479868'),('z8ygc1eltor19lgp03cr577t2z293miv','.eJxVjE0OwiAYRO_C2hB-SqEu3fcMZOADqRqalHZlvLtt0oXOct6beTOPbS1-a2nxE7Erk-zy2wXEZ6oHoAfqfeZxrusyBX4o_KSNjzOl1-10_w4KWtnXnYAgCat6AMHqPSJQjHaQJkCobDS0QZ8tOZUVITtSQ-qMU0OQwrLPF-inN-Q:1rvQ7U:7DNe-llOoFHR8FmRXiWNZLe-pFcp2AED8WbIYyt8CMk','2024-04-26 23:15:44.071761');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `Event_ID` int NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Date` datetime NOT NULL,
  `Admin_ID` int NOT NULL,
  PRIMARY KEY (`Event_ID`),
  UNIQUE KEY `Event_ID_UNIQUE` (`Event_ID`),
  KEY `Admin_IDEvent_idx` (`Admin_ID`),
  CONSTRAINT `Admin_IDEvent` FOREIGN KEY (`Admin_ID`) REFERENCES `administrator` (`Administrator_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event hall`
--

DROP TABLE IF EXISTS `event hall`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event hall` (
  `Floor_No` int NOT NULL,
  `Room_ID` int NOT NULL,
  `Max Occupancy` int NOT NULL,
  `Status` varchar(255) NOT NULL,
  PRIMARY KEY (`Floor_No`,`Room_ID`),
  UNIQUE KEY `Floor_No_UNIQUE` (`Floor_No`),
  UNIQUE KEY `Room_ID_UNIQUE` (`Room_ID`),
  CONSTRAINT `Floor_No` FOREIGN KEY (`Floor_No`) REFERENCES `floor` (`FloorNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event hall`
--

LOCK TABLES `event hall` WRITE;
/*!40000 ALTER TABLE `event hall` DISABLE KEYS */;
/*!40000 ALTER TABLE `event hall` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_apply`
--

DROP TABLE IF EXISTS `event_apply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_apply` (
  `User_ID` int NOT NULL,
  `Event_ID` int NOT NULL,
  PRIMARY KEY (`User_ID`,`Event_ID`),
  UNIQUE KEY `User_ID_UNIQUE` (`User_ID`),
  UNIQUE KEY `event_applycol_UNIQUE` (`Event_ID`),
  CONSTRAINT `Event_IDApply` FOREIGN KEY (`Event_ID`) REFERENCES `event` (`Event_ID`),
  CONSTRAINT `User_IDApply` FOREIGN KEY (`User_ID`) REFERENCES `user` (`User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_apply`
--

LOCK TABLES `event_apply` WRITE;
/*!40000 ALTER TABLE `event_apply` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_apply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_held`
--

DROP TABLE IF EXISTS `event_held`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_held` (
  `Room_ID` int NOT NULL,
  `Event_ID` int NOT NULL,
  PRIMARY KEY (`Room_ID`,`Event_ID`),
  UNIQUE KEY `Room_ID_UNIQUE` (`Room_ID`),
  UNIQUE KEY `Event_ID_UNIQUE` (`Event_ID`),
  CONSTRAINT `Event_ID_Held` FOREIGN KEY (`Event_ID`) REFERENCES `event` (`Event_ID`),
  CONSTRAINT `Room_ID_Held` FOREIGN KEY (`Room_ID`) REFERENCES `event hall` (`Room_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_held`
--

LOCK TABLES `event_held` WRITE;
/*!40000 ALTER TABLE `event_held` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_held` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facilities`
--

DROP TABLE IF EXISTS `facilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facilities` (
  `Facilities` varchar(255) NOT NULL,
  `FloorNo` int NOT NULL,
  `RoomID` int NOT NULL,
  PRIMARY KEY (`Facilities`,`FloorNo`,`RoomID`),
  UNIQUE KEY `Facilities_UNIQUE` (`Facilities`),
  UNIQUE KEY `Floor_No_UNIQUE` (`FloorNo`),
  UNIQUE KEY `Room_ID_UNIQUE` (`RoomID`),
  CONSTRAINT `FloorNo` FOREIGN KEY (`FloorNo`) REFERENCES `event hall` (`Floor_No`),
  CONSTRAINT `RoomID` FOREIGN KEY (`RoomID`) REFERENCES `event hall` (`Room_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facilities`
--

LOCK TABLES `facilities` WRITE;
/*!40000 ALTER TABLE `facilities` DISABLE KEYS */;
/*!40000 ALTER TABLE `facilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `floor`
--

DROP TABLE IF EXISTS `floor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `floor` (
  `FloorNo` int NOT NULL,
  PRIMARY KEY (`FloorNo`),
  UNIQUE KEY `FloorNo_UNIQUE` (`FloorNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `floor`
--

LOCK TABLES `floor` WRITE;
/*!40000 ALTER TABLE `floor` DISABLE KEYS */;
INSERT INTO `floor` VALUES (1),(2),(3),(4),(5);
/*!40000 ALTER TABLE `floor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lend`
--

DROP TABLE IF EXISTS `lend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lend` (
  `Account_ID` int NOT NULL,
  `Book_ID` int NOT NULL,
  PRIMARY KEY (`Account_ID`,`Book_ID`),
  UNIQUE KEY `Account_ID_UNIQUE` (`Account_ID`),
  UNIQUE KEY `Lendcol_UNIQUE` (`Book_ID`),
  CONSTRAINT `Admin_IDLend` FOREIGN KEY (`Account_ID`) REFERENCES `administrator` (`Administrator_ID`),
  CONSTRAINT `Book_ID2` FOREIGN KEY (`Book_ID`) REFERENCES `book` (`book_id`),
  CONSTRAINT `User_IDLend` FOREIGN KEY (`Account_ID`) REFERENCES `user` (`User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lend`
--

LOCK TABLES `lend` WRITE;
/*!40000 ALTER TABLE `lend` DISABLE KEYS */;
/*!40000 ALTER TABLE `lend` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phone`
--

DROP TABLE IF EXISTS `phone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phone` (
  `PhoneNumber` int NOT NULL,
  `Person_ID` int NOT NULL,
  PRIMARY KEY (`PhoneNumber`,`Person_ID`),
  UNIQUE KEY `PhoneNumber_UNIQUE` (`PhoneNumber`),
  UNIQUE KEY `Person_ID_UNIQUE` (`Person_ID`),
  CONSTRAINT `AdminPhone` FOREIGN KEY (`Person_ID`) REFERENCES `administrator` (`Administrator_ID`),
  CONSTRAINT `UserPhone` FOREIGN KEY (`Person_ID`) REFERENCES `user` (`User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phone`
--

LOCK TABLES `phone` WRITE;
/*!40000 ALTER TABLE `phone` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat`
--

DROP TABLE IF EXISTS `seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat` (
  `FloorNo` int NOT NULL,
  `Seat_num` int NOT NULL,
  `Type` varchar(255) NOT NULL,
  `Status` varchar(255) NOT NULL,
  PRIMARY KEY (`Seat_num`,`FloorNo`),
  UNIQUE KEY `Seat_num_UNIQUE` (`Seat_num`),
  KEY `seat_FloorNo_a5f4608d` (`FloorNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat`
--

LOCK TABLES `seat` WRITE;
/*!40000 ALTER TABLE `seat` DISABLE KEYS */;
INSERT INTO `seat` VALUES (1,1,'BeanBag','Occupied'),(2,2,'BeanBag','Occupied'),(3,3,'Chair','Available'),(4,4,'Desk','Available'),(4,6,'Couch','Occupied'),(5,7,'BeanBag','Available'),(2,8,'Couch','Available'),(3,22,'Chair','Available'),(5,56,'Desk','Available');
/*!40000 ALTER TABLE `seat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat_book`
--

DROP TABLE IF EXISTS `seat_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat_book` (
  `User_ID` int NOT NULL,
  `Seat_num` int NOT NULL,
  `Time` varchar(255) NOT NULL,
  PRIMARY KEY (`User_ID`,`Seat_num`),
  UNIQUE KEY `User_ID_UNIQUE` (`User_ID`),
  UNIQUE KEY `Sear_num_UNIQUE` (`Seat_num`),
  UNIQUE KEY `seat_book_User_ID_Seat_num_24c23d98_uniq` (`User_ID`),
  CONSTRAINT `Seat_num` FOREIGN KEY (`Seat_num`) REFERENCES `seat` (`Seat_num`),
  CONSTRAINT `User_ID` FOREIGN KEY (`User_ID`) REFERENCES `user` (`User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat_book`
--

LOCK TABLES `seat_book` WRITE;
/*!40000 ALTER TABLE `seat_book` DISABLE KEYS */;
INSERT INTO `seat_book` VALUES (1,1,'3'),(69,6,'4');
/*!40000 ALTER TABLE `seat_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shelf`
--

DROP TABLE IF EXISTS `shelf`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shelf` (
  `Floor_No` int NOT NULL,
  `Shelf_No` int NOT NULL,
  PRIMARY KEY (`Shelf_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shelf`
--

LOCK TABLES `shelf` WRITE;
/*!40000 ALTER TABLE `shelf` DISABLE KEYS */;
INSERT INTO `shelf` VALUES (1,1),(2,2),(3,4),(1,5);
/*!40000 ALTER TABLE `shelf` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `study_room`
--

DROP TABLE IF EXISTS `study_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `study_room` (
  `FloorNo` int NOT NULL,
  `Room_ID` int NOT NULL,
  `Max_Occupancy` int NOT NULL,
  `Status` varchar(255) NOT NULL,
  `HasTv` varchar(255) NOT NULL,
  PRIMARY KEY (`FloorNo`,`Room_ID`),
  UNIQUE KEY `Study_Roomcol_UNIQUE` (`Room_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `study_room`
--

LOCK TABLES `study_room` WRITE;
/*!40000 ALTER TABLE `study_room` DISABLE KEYS */;
INSERT INTO `study_room` VALUES (1,3,1,'Occupied','False'),(1,7,2,'Occupied','False'),(1,8,7,'Occupied','True'),(1,22,22,'Available','True'),(2,2,22,'Available','True'),(2,12,23,'Available','True'),(3,1,20,'Available','True');
/*!40000 ALTER TABLE `study_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studyroom_book`
--

DROP TABLE IF EXISTS `studyroom_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studyroom_book` (
  `Room_ID` int NOT NULL,
  `Time` longtext NOT NULL,
  `User_ID` int NOT NULL,
  PRIMARY KEY (`Room_ID`,`User_ID`),
  UNIQUE KEY `Room_ID_UNIQUE` (`Room_ID`),
  UNIQUE KEY `User_ID_UNIQUE` (`User_ID`),
  CONSTRAINT `Room_ID1` FOREIGN KEY (`Room_ID`) REFERENCES `study_room` (`Room_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studyroom_book`
--

LOCK TABLES `studyroom_book` WRITE;
/*!40000 ALTER TABLE `studyroom_book` DISABLE KEYS */;
INSERT INTO `studyroom_book` VALUES (3,'3',1),(7,'4',3),(8,'6',69);
/*!40000 ALTER TABLE `studyroom_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `User_ID` int NOT NULL,
  `Email` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `User_password` varchar(255) NOT NULL,
  PRIMARY KEY (`User_ID`),
  UNIQUE KEY `User_ID_UNIQUE` (`User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Table for users in website';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'matteocusanelli@gmail.com','Matteo','Vitangelo','Cusanelli','Poop123'),(2,'joe@gmail.com','Joe','Sigma','Larsson','Poop123'),(3,'jeffpoop@gmail.com','jefferson','monkey','poop','Poop123'),(4,'bigchungus12@gmail.com','Chungus','lover','chino','Poop123'),(69,'barf@gmail.com','b','a','r','Poop123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'universal library'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-16 17:26:54
