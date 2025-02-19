using LiteDB;
using System;

public class LiteDbContext : ILiteDbContext, IDisposable
{
    private readonly LiteDatabase _database;

    public LiteDbContext(string databasePath)
    {
        _database = new LiteDatabase(databasePath);
    }

    public LiteDatabase Database => _database;

    public void Dispose()
    {
        _database?.Dispose();
    }
}
