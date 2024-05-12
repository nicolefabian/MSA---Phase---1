### CAST function 
- converts value to a specified data type if the value is compatible with the target data type
``` sql

<!--convert integer values in ProductID column to varchar values (with maximum 4 characters)
in order to concatenate them with another character-based value-->
SELECT CAST(ProductID AS varchar(4)) + ': ' + Name AS ProductName
FROM Production.Product;
```

### TRY_CAST function
- attempts to do conversion and if fails, returns NULL instead of error 
``` sql
<!--Size contains both numeric and char values like S,M,L-->
SELECT TRY_CAST(Size AS integer) As NumericSize
FROM Production.Product;
```

### CONVERT and TRY_CONVERT function
- used to convert between data types but allows you to specify a format style when converting numeric and date values as strings
```sql 
SELECT SellStartDate,
       CONVERT(varchar(20), SellStartDate) AS StartDate,
        //specifies a format 101 
       CONVERT(varchar(10), SellStartDate, 101) AS FormattedStartDate
FROM SalesLT.Product;
```

### PARSE and TRY_PARSE 
- used to convert formatted strings that represent numeric or date/time values
``` sql
SELECT PARSE('01/01/2021' AS date) AS DateValue,
   PARSE('$199.99' AS money) AS MoneyValue;
```

### STR
- converts numeric value to varchar
``` sql
SELECT ProductID,  '$' + STR(ListPrice) AS Price
FROM Production.Product;
```

### ISNULL
- takes two arguments: expression being tested and if the value of the first argument is null, the function returns second argument, otherwise if not null, it is returned unchanged
``` sql
SELECT FirstName,
    <!--if the value of the MiddleName is NULL, returns `None` -->
      ISNULL(MiddleName, 'None') AS MiddleIfAny,
      LastName
FROM Sales.Customer;
```

### COALESCE
- allows to provide multiple expressions and returns the first one that is not NULL
- can take a variable number of arguments, each of which is an expression. It evaluates these expressions in order and returns the value of the first expression that is not NULL.
```sql
SELECT 
    EmployeeID,
    //if any of the tables(HourlyRate, WeeklySalary, Commission * SalesQty) is null, returns the value of the first non-NULL expression among the three
    COALESCE(HourlyRate * 40, WeeklySalary, Commission * SalesQty) AS WeeklyEarnings
FROM 
    HR.Wages;
```

### NULLIF
- takes two arguments and returns NULL if they're equivalent. If they aren't equal, NULLIF returns the first argument.
```sql
SELECT SalesOrderID,
      ProductID,
      UnitPrice,
      //if the value of the UnitPriceDiscount is 0, NULLIF returns NULL, otherwise, it returns the value of the table
      NULLIF(UnitPriceDiscount, 0) AS Discount
FROM Sales.SalesOrderDetail;
```