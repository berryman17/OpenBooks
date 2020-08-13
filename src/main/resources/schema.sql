DROP TABLE IF EXISTS COMPANY;
DROP TABLE IF EXISTS ACCOUNT;
DROP TABLE IF EXISTS ACCOUNTING_ENTRY;
DROP TABLE IF EXISTS ADJUSTMENT;

CREATE TABLE COMPANY (
  ID INT IDENTITY PRIMARY KEY,
  COMPANY_NAME VARCHAR(50) NOT NULL
);

CREATE TABLE ACCOUNT (
	ID INT IDENTITY PRIMARY KEY,
	COMPANY_ID INT NOT NULL,
	BALANCE NUMERIC(12,2) DEFAULT 0 NOT NULL,
	ACCOUNT_NUMBER VARCHAR(20) NOT NULL,
	NICKNAME VARCHAR(50) NOT NULL,
	ACCOUNT_TYPE VARCHAR(10) NOT NULL,
	CONSTRAINT FK_ACCOUNT_COMPANY FOREIGN KEY (COMPANY_ID)
    REFERENCES COMPANY(ID)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE ACCOUNTING_ENTRY (
  ID INT IDENTITY PRIMARY KEY,
  ENTRY_NAME VARCHAR(50),
  NOTES VARCHAR(255)
);

CREATE TABLE ADJUSTMENT (
	ID INT IDENTITY PRIMARY KEY,
	ACCOUNT_ID INT NOT NULL,
	ACCOUNTING_ENTRY_ID INT NOT NULL,
	AMOUNT NUMERIC(12,2) DEFAULT 0 NOT NULL,
	TRANSACTION_TYPE VARCHAR(10) NOT NULL,
	CONSTRAINT FK_ACCOUNT_TRANSACTION FOREIGN KEY (ACCOUNT_ID)
	  REFERENCES ACCOUNT(ID)
	  ON DELETE CASCADE
	  ON UPDATE CASCADE,
	CONSTRAINT FK_ACCOUNTING_ENTRY_TRANSACTION FOREIGN KEY (ACCOUNTING_ENTRY_ID)
	  REFERENCES ACCOUNTING_ENTRY(ID)
	  ON DELETE CASCADE
	  ON UPDATE CASCADE
);

