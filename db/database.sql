CREATE DATABASE rex;

USE [rex]
GO

/****** Object:  Table [dbo].[snapshots]    Script Date: 25/08/2022 15:01:14 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[snapshots](
	[id] [int] NOT NULL,
	[ni] [int] NULL,
	[l1] [varchar](250) NULL,
	[odo] [int] NULL,
	[eq] [int] NULL,
	[n] [int] NULL,
	[equipment_id] [varchar](255) NULL,
	[op] [int] NULL,
	[eop] [float] NULL,
	[ts] [bigint] NULL,
	[opr] [varchar](255) NULL,
	[efr] [float] NULL,
	[st] [varchar](255) NULL,
	[implw] [float] NULL,
	[l2] [varchar](250) NULL,
	[app] [varchar](250) NULL,
	[spd] [float] NULL,
	[ect] [float] NULL,
	[l3] [varchar](250) NULL,
	[d] [int] NULL,
	[hm] [int] NULL,
	[impl] [varchar](250) NULL,
	[etf] [float] NULL,
	[latlng] [varchar](250) NULL,
	[rpm] [int] NULL,
	[to_os] [varchar](255) NULL,
	[snapshot_datetime] [datetime2](7) NULL,
 CONSTRAINT [PK_snapshot] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

