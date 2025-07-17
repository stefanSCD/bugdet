import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Stack,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BankSelectorModal from "./BankSelectorModal";

export default function ConnectedAccounts() {
  const theme = useTheme();
  const [showBanks, setShowBanks] = useState(false);
  
  const connectedAccounts = [
    {
      id: "3c5886c6c6e5e82f1f2af020b648f0014",
      name: "PayPal",
      status: "Ready",
      lastAccessed: "July 15, 2025, 10:48 AM",
      accountType: "Digital Wallet",
    },
    {
      id: "3c5886c6c6e5e82f1f2af020b648f0015",
      name: "Chase Bank",
      status: "Ready",
      lastAccessed: "July 14, 2025, 3:22 PM",
      accountType: "Checking",
    },
  ];

  const handleSelectBank = (bankId) => {
    console.log("User selected:", bankId);
    setShowBanks(false);
    // aici faci redirect la flow GoCardless sau altceva...
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Ready":
        return "success";
      case "Pending":
        return "warning";
      case "Error":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Box sx={{ maxWidth: 900, margin: "auto", padding: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          My Account Data
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.text.secondary, mb: 2, maxWidth: 600 }}
        >
          Connect your bank accounts with GoCardless to test the user flow and
          see how output data looks like.
        </Typography>
        <Box
          sx={{
            backgroundColor: alpha(theme.palette.info.main, 0.1),
            border: `1px solid ${alpha(theme.palette.info.main, 0.2)}`,
            borderRadius: 2,
            padding: 2,
          }}
        >
          <Typography variant="body2" color="info.main">
            <strong>Note:</strong> Accounts connected this way are linked to
            GoCardless, not to your company. API access requires programmatic
            linking.
          </Typography>
        </Box>
      </Box>

      <Card
        variant="outlined"
        sx={{
          borderRadius: 3,
          boxShadow: theme.shadows[1],
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        <CardHeader
          title={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccountBalanceIcon color="primary" />
              <Typography variant="h6" fontWeight={600}>
                Connected Accounts
              </Typography>
              <Chip
                label={connectedAccounts.length}
                size="small"
                color="primary"
                sx={{ ml: 1 }}
              />
            </Box>
          }
          action={
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setShowBanks(true)}
              sx={{
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                py: 1,
                minWidth: "auto",
              }}
            >
              Connect new bank
            </Button>
          }
          sx={{
            pb: 1,
            "& .MuiCardHeader-action": {
              margin: 0,
              alignSelf: "center",
            },
          }}
        />
        <Divider />
        <CardContent sx={{ p: 0 }}>
          <Stack spacing={0}>
            {connectedAccounts.map((account, index) => (
              <Box
                key={account.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 3,
                  borderBottom:
                    index < connectedAccounts.length - 1
                      ? `1px solid ${theme.palette.divider}`
                      : "none",
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.04),
                  },
                  transition: "background-color 0.2s ease-in-out",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AccountBalanceIcon color="primary" />
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 0.5,
                      }}
                    >
                      <Typography variant="body1" fontWeight={600}>
                        {account.name}
                      </Typography>
                      <Chip
                        icon={<CheckCircleIcon />}
                        label={account.status}
                        size="small"
                        color={getStatusColor(account.status)}
                        variant="outlined"
                        sx={{ height: 24 }}
                      />
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      {account.accountType} • Last accessed on{" "}
                      {account.lastAccessed}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<VisibilityIcon />}
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 500,
                    minWidth: "auto",
                  }}
                >
                  View transactions
                </Button>
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>

      {connectedAccounts.length === 0 && (
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            px: 4,
            borderRadius: 3,
            backgroundColor: alpha(theme.palette.grey[100], 0.5),
            border: `2px dashed ${theme.palette.divider}`,
            mt: 4,
          }}
        >
          <AccountBalanceIcon
            sx={{
              fontSize: 64,
              color: theme.palette.grey[400],
              mb: 2,
            }}
          />
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No accounts connected yet
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Connect your first bank account to get started
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="large"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              px: 4,
            }}
          >
            Connect your first bank
          </Button>
        </Box>
      )}
      <BankSelectorModal
        open={showBanks}
        onClose={() => setShowBanks(false)}
        onSelect={handleSelectBank}
      />
    </Box>
    
  );
}
